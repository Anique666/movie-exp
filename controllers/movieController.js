import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export async function getMovies(req, res) {
  try {
    const {
      year,
      genres,
      without_genres,
      sort = 'popularity',
      order = 'desc',
      search,
      cast,
    } = req.query;


    const where = {};

    if (year) {
      where.release_date = {
        gte: `${year}-01-01`,
        lte: `${year}-12-31`,
      };
    }

    if (genres) {
      where.movie_genres = {
        some: {
          genre_id: { in: genres.split(',').map(Number) },
        },
      };
    }

    if (without_genres) {
      where.movie_genres = {
        none: {
          genre_id: { in: without_genres.split(',').map(Number) },
        },
      };
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (cast) {
      where.movie_cast = {
        some: {
          acast: {
            name: { contains: cast, mode: 'insensitive' },
          },
        },
      };
    }

    
    const allowedSort = [
      'popularity',
      'vote_average',
      'vote_count',
      'release_date',
      'revenue',
      'title',
    ];
    const orderBy = allowedSort.includes(sort)
      ? { [sort]: order === 'asc' ? 'asc' : 'desc' }
      : { popularity: 'desc' };

    const movies = await prisma.movies.findMany({
      where,
      orderBy,
      include: {
        movie_genres: { include: { genres: true } },
        movie_cast: { include: { acast: true } },
      },
    });

    res.json({
      results: movies,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
