import axios from 'axios';

const FetchGenre = async (url) => {
    const token = process.env.REACT_FILM_APP_TOKEN;
    const genreurl = process.env.REACT_FILM_APP_GENRE_URL;
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: `${genreurl}/${url}`,
    });
    return response.data.genres;
  } catch (error) {
    console.error("There was an error fetching the movies!", error);
    return [];
  }
};

export default FetchGenre;
