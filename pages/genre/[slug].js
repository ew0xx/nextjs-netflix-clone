import { useRef, useState } from "react";
import { getMovie } from "../../utils/getMovie.js";
import { useEffect } from "react";
import Item from "../../components/Item";
import Header from "../../components/Header";

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "99",
        },
        params: {
          slug: "35",
        },
        params: {
          slug: "28",
        },
        params: {
          slug: "10749",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const movie = await getMovie(params);

  return {
    props: {
      movie,
    },
  };
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
