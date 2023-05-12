import { useRef, useState } from "react";
import { getMovie } from "../../utils/getMovie";
import { useEffect } from "react";
import Item from "../../components/Item";
import Header from "../../components/Header";
import { Movie } from "@/typings";

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "action",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug = "action" } }) {
  const movie = await getMovie(slug);
  const movies = JSON.stringify(movie);

  return {
    props: {
      movies,
    },
  };
}

const Movies = ({ movie }: Movie | any) => {
  const movies = movie.props.movie;
  return (
    <div>
      <Header />
      <div className="text-white">
        <div className="flex flex-wrap items-center space-x-0.5 md:space-x-2.5 md:p-2">
          {movies?.map((movie: Movie) => (
            <Item key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
