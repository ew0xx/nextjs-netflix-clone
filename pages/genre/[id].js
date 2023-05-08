import { useRef, useState } from "react";
import { getMovie } from "../getMovie";
import { useEffect } from "react";
import Item from "../../components/Item";
import Header from "../../components/Header";
export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "28",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id = 1 } }) {
  try {
    const movie = await getMovie(id);

    return {
      props: {
        movie,
      },
    };
  } catch (err) {
    console.log({
      Error: err,
    });
  }
}

const Movies = ({ movie }) => {
  const movies = movie.props.movie;
  return (
    <div>
      <Header />
      <div className="text-white">
        {movie.genre_id}
        <div className="flex flex-wrap items-center space-x-0.5 md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Item key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
