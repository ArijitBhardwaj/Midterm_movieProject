const API_toprated_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4ab94620b95053e9e2e2896b557594cc';
const API_popular_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=4ab94620b95053e9e2e2896b557594cc';
const API_upcoming_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4ab94620b95053e9e2e2896b557594cc';

async function getTopRatedInfo(){
    const data = await fetch (API_toprated_URL);
}