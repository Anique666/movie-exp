import axios from 'axios';

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});


const FALLBACK_MOVIES = {
"dates": {
"maximum": "2025-04-16",
"minimum": "2025-03-05"
},
"page": 1,
"results": [
{
"adult": false,
"backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
"genre_ids": [
10751,
35,
12,
14
],
"id": 950387,
"original_language": "en",
"original_title": "A Minecraft Movie",
"overview": "Four misfits find themselves struggling with ordinaryproblems when they are suddenly pulled through a mysterious portal into theOverworld: a bizarre, cubic wonderland that thrives on imagination. To getback home, they'll have to master this world while embarking on a magicalquest with an unexpected, expert crafter, Steve.",
"popularity": 824.7134,
"poster_path": "/iPPTGh2OXuIv6d7cwuoPkw8govp.jpg",
"release_date": "2025-03-31",
"title": "A Minecraft Movie",
"video": false,
"vote_average": 6.1,
"vote_count": 482
},
{
"adult": false,
"backdrop_path": "/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
"genre_ids": [
14,
12,28
],
"id": 324544,
"original_language": "en",
"original_title": "In the Lost Lands",
"overview": "A queen sends the powerful and feared sorceress GrayAlys to the ghostly wilderness of the Lost Lands in search of a magicalpower, where the sorceress and her guide, the drifter Boyce must outwit andoutfight man and demon.",
"popularity": 873.5678,
"poster_path": "/iHf6bXPghWB6gT8kFkL1zo00x6X.jpg",
"release_date": "2025-02-27",
"title": "In the Lost Lands",
"video": false,
"vote_average": 5.926,
"vote_count": 101
},
],
"total_pages": 49754,
"total_results": 995075
};
const FALLBACK_DETAILS = [{
"adult": false,
"backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
"belongs_to_collection": {
"id": 1461530,
"name": "The Minecraft Movie Collection",
"poster_path": "/8jMQ2sVZ1RRiYSpcb7Yommo7V4r.jpg",
"backdrop_path": "/48TbIdb60bjLvVhj6W71YNvDM2p.jpg"
},
"budget": 150000000,
"genres": [
{
"id": 10751,
"name": "Family"
},
{
"id": 35,
"name": "Comedy"
},
{
"id": 12,
"name": "Adventure"
},
{
"id": 14,
"name": "Fantasy"
}
],
"homepage": "https://www.minecraft-movie.com",
"id": 950387,
"imdb_id": "tt3566834",
"origin_country": [
"US"
],
"original_language": "en",
"original_title": "A Minecraft Movie",
"overview": "Four misfits find themselves struggling with ordinaryproblems when they are suddenly pulled through a mysterious portal into theOverworld: a bizarre, cubic wonderland that thrives on imagination. To getback home, they'll have to master this world while embarking on a magicalquest with an unexpected, expert crafter, Steve.",
"popularity": 699.0444,
"poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
"production_companies": [
{
"id": 174,
"logo_path": "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
"name": "Warner Bros. Pictures",
"origin_country": "US"
},
{
"id": 923,
"logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
"name": "Legendary Pictures",
"origin_country": "US"
},
{
"id": 110691,
"logo_path": "/i0D9b0veZbValgEFiJjSd0mbb9C.png",
"name": "Mojang Studios",
"origin_country": "SE"
},
{
"id": 829,
"logo_path": "/aXqwCvJSCDbTclkxAYfsT1l4Dsa.png",
"name": "Vertigo Entertainment",
"origin_country": "US"
},
{
"id": 159602,
"logo_path": "/e3KodIPxOSC6xpzgIBISB4COQcu.png",
"name": "On the Roam",
"origin_country": "US"
},
{
"id": 216687,
"logo_path": "/kKVYqekveOvLK1IgqdJojLjQvtu.png",
"name": "Domain Entertainment",
"origin_country": "US"
}
],"production_countries": [
{
"iso_3166_1": "SE",
"name": "Sweden"
},
{
"iso_3166_1": "US",
"name": "United States of America"
}
],
"release_date": "2025-03-31",
"revenue": 552664857,
"runtime": 101,
"spoken_languages": [
{
"english_name": "English",
"iso_639_1": "en",
"name": "English"
}
],
"status": "Released",
"tagline": "Be there and be square.",
"title": "A Minecraft Movie",
"video": false,
"vote_average": 6.08,
"vote_count": 528
},
{
"adult": false,
"backdrop_path": "/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
"belongs_to_collection": null,
"budget": 55000000,
"genres": [
{
"id": 14,
"name": "Fantasy"
},
{
"id": 12,
"name": "Adventure"
},
{
"id": 28,"name": "Action"
}
],
"homepage": "https://inthelostlands.com",
"id": 324544,
"imdb_id": "tt4419684",
"origin_country": [
"DE",
"CH"
],
"original_language": "en",
"original_title": "In the Lost Lands",
"overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power,where the sorceress and her guide, the drifter Boyce must outwit and outfight man and demon.",
"popularity": 789.8905,
"poster_path": "/iHf6bXPghWB6gT8kFkL1zo00x6X.jpg",
"production_companies": [
{
"id": 47,
"logo_path": "/i7Z9ot2o3N5Sa3HrF09kniFs2y8.png",
"name": "Constantin Film",
"origin_country": "DE"
},
{
"id": 187303,
"logo_path": "/5CJA1Ej3gJxosjkzz2T7AeLw1SQ.png",
"name": "Spark Productions",
"origin_country": "CH"
}
],
"production_countries": [
{
"iso_3166_1": "DE",
"name": "Germany"
},
{
"iso_3166_1": "CH",
"name": "Switzerland"
}
],
"release_date": "2025-02-27","revenue": 4755330,
"runtime": 102,
"spoken_languages": [
{
"english_name": "German",
"iso_639_1": "de",
"name": "Deutsch"
},
{
"english_name": "English",
"iso_639_1": "en",
"name": "English"
}
],
"status": "Released",
"tagline": "She seeks the power to free her people.",
"title": "In the Lost Lands",
"video": false,
"vote_average": 6.398,
"vote_count": 157
}];
const FALLBACK_CREDITS = [{
"id": 950387,
"cast": [
{
"adult": false,
"gender": 2,
"id": 117642,
"known_for_department": "Acting",
"name": "Jason Momoa",
"original_name": "Jason Momoa",
"popularity": 18.2497,
"profile_path": "/6dEFBpZH8C8OijsynkSajQT99Pb.jpg",
"cast_id": 10,
"character": "Garrett",
"credit_id": "625db715d266a23317987f90",
"order": 0
},
{
"adult": false,
"gender": 2,
"id": 70851,
"known_for_department": "Acting",
"name": "Jack Black",
"original_name": "Jack Black",
"popularity": 12.3774,
"profile_path": "/9QKdFKfc3Zi5XwnQHrFukFMpo5o.jpg",
"cast_id": 26,
"character": "Steve",
"credit_id": "65945eb92f8d09093937e312",
"order": 1
},
{
"adult": false,
"gender": 2,
"id": 2680307,
"known_for_department": "Acting",
"name": "Sebastian Eugene Hansen",
"original_name": "Sebastian Eugene Hansen",
"popularity": 17.4486,"profile_path": "/40HNkoB3RKPMPgLhTyKQU6kG0sc.jpg",
"cast_id": 24,
"character": "Henry",
"credit_id": "65692d2e63536a011bde6ee0",
"order": 2
},
{
"adult": false,
"gender": 1,
"id": 2604515,
"known_for_department": "Acting",
"name": "Emma Myers",
"original_name": "Emma Myers",
"popularity": 17.5131,
"profile_path": "/xBJsFGAL3sOIxMUA0sMVEKKpAL4.jpg",
"cast_id": 25,
"character": "Natalie",
"credit_id": "65711eaeb04605013a3730f0",
"order": 3
},
{
"adult": false,
"gender": 1,
"id": 1075037,
"known_for_department": "Acting",
"name": "Danielle Brooks",
"original_name": "Danielle Brooks",
"popularity": 3.1142,
"profile_path": "/dEonf59ukDW8LaN7vwj8WMmXrXf.jpg",
"cast_id": 23,
"character": "Dawn",
"credit_id": "65692978d04d1a010d636db6",
"order": 4
},
]
},
{
"id": 324544,
"cast": [
{
"adult": false,
"gender": 1,
"id": 63,"known_for_department": "Acting",
"name": "Milla Jovovich",
"original_name": "Milla Jovovich",
"popularity": 5.4055,
"profile_path": "/usWnHCzbADijULREZYSJ0qfM00y.jpg",
"cast_id": 9,
"character": "Gray Alys",
"credit_id": "6037edb8b76cbb0040cc79e9",
"order": 0
},
{
"adult": false,
"gender": 2,
"id": 543530,
"known_for_department": "Acting",
"name": "Dave Bautista",
"original_name": "Dave Bautista",
"popularity": 4.0669,
"profile_path": "/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
"cast_id": 10,
"character": "Boyce",
"credit_id": "6037edc787a27a003d149e78",
"order": 1
},
{
"adult": false,
"gender": 1,
"id": 66147,
"known_for_department": "Acting",
"name": "Arly Jover",
"original_name": "Arly Jover",
"popularity": 0.416,
"profile_path": "/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
"cast_id": 11,
"character": "Ash",
"credit_id": "63cb8611cee4810084d3d370",
"order": 2
},
{
"adult": false,
"gender": 1,
"id": 3883680,
"known_for_department": "Acting","name": "Amara Okereke",
"original_name": "Amara Okereke",
"popularity": 0.4198,
"profile_path": "/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
"cast_id": 12,
"character": "Melange",
"credit_id": "63cb861d6d97e60081fea1fc",
"order": 3
},
{
"adult": false,
"gender": 2,
"id": 30087,
"known_for_department": "Acting",
"name": "Fraser James",
"original_name": "Fraser James",
"popularity": 1.7641,
"profile_path": "/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg",
"cast_id": 47,
"character": "Patriarch Johan",
"credit_id": "67b356fcaaac3b1674e0eabb",
"order": 4
},
]
}];

export async function getDiscoverMovies() {
  const movies = [];
  try {
    for (let page = 1; page <= 25; page++) {
      const res = await tmdb.get('/discover/movie', { params: { page } });
      if (res.data && res.data.results) {
        movies.push(...res.data.results);
      }
    }
    return movies.slice(0, 500);
  } catch (err) {
    console.error('Error fetching movies:', err);
    return FALLBACK_MOVIES;
  }
}


export async function getMovieDetails(movieId) {
  try {
    const res = await tmdb.get(`/movie/${movieId}`);
    return res.data;
  } catch (err) {
    return FALLBACK_DETAILS[movieId] || null;
  }
}


export async function getMovieCredits(movieId) {
  try {
    const res = await tmdb.get(`/movie/${movieId}/credits`);
    return res.data;
  } catch (err) {
    return FALLBACK_CREDITS[movieId] || null;
  }
}

export default {
  getDiscoverMovies,
  getMovieDetails,
  getMovieCredits,
};

