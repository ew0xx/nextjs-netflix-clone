const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovie = async (id) => {
  const [movie] = await Promise.all([
    fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=${id}`
    ).then((res) => res.json()),
  ]);
  return {
    props: {
      movie: movie.results,
    },
  };
};
