import { PrismaClient } from '../generated/prisma/client.js';
import { getDiscoverMovies, getMovieDetails, getMovieCredits } from '../api/tmdb.js';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database with TMDB data...');
    const discover = await getDiscoverMovies();
    const movies = discover.results || discover; // fallback may be array

  for (const movie of movies) {
    
    const details = await getMovieDetails(movie.id);
    const credits = await getMovieCredits(movie.id);

    
    if (details.genres) {
      for (const genre of details.genres) {
        await prisma.genres.upsert({
          where: { id: genre.id },
          update: {},
          create: { id: genre.id, name: genre.name },
        });
      }
    }

    
    await prisma.movies.upsert({
      where: { id: movie.id },
      update: {},
      create: {
        id: movie.id,
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids || (details.genres ? details.genres.map(g => g.id) : []),
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        video: movie.video,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      },
    });

    // Joining movies with genres
    if (details.genres) {
      for (const genre of details.genres) {
        await prisma.movie_genres.upsert({
          where: { movie_id_genre_id: { movie_id: movie.id, genre_id: genre.id } },
          update: {},
          create: { movie_id: movie.id, genre_id: genre.id },
        });
      }
    }

    // Joining movies with cast
    if (credits && credits.cast) {
      for (const cast of credits.cast) {
        await prisma.acast.upsert({
          where: { id: cast.id },
          update: {},
          create: {
            id: cast.id,
            adult: cast.adult,
            gender: cast.gender,
            known_for_department: cast.known_for_department,
            name: cast.name,
            original_name: cast.original_name,
            popularity: cast.popularity,
            profile_path: cast.profile_path,
          },
        });
        await prisma.movie_cast.upsert({
          where: { movie_id_cast_id: { movie_id: movie.id, cast_id: cast.id } },
          update: {},
          create: {
            movie_id: movie.id,
            cast_id: cast.id,
            cast_order: cast.order,
            character: cast.character,
            credit_id: cast.credit_id,
          },
        });
      }
    }
  }
  console.log('Seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
