import axios from "axios";

const fetchMovies = async (url) => {
  const token = process.env.REACT_FILM_APP_TOKEN;
  const baseurl = process.env.REACT_FILM_APP_BASE_URL;
  try {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      url: `${baseurl}/${url}`,
    });
    return response.data.results;
  } catch (error) {
    console.error("There was an error fetching the movies!", error);
    return [];
  }
};

export default fetchMovies;
