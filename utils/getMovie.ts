const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=`;

export const getMovie = async (slug = "action") => {
  const movieHash = {
    action: "99",
    comedy: "35",
    romance: "28",
    documantaries: "10749",
  };

  const [movie] = await Promise.all([
    fetch(url.concat(movieHash[slug as keyof typeof movieHash])).then((res) =>
      res.json()
    ),
  ]);
  return {
    props: {
      movie: movie.results,
    },
  };
};
