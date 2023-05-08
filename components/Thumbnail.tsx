import { modalState, movieState } from "@/atoms/modelAtom";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typings";
import Image from "next/image";
import { useRecoilState } from "recoil";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="Thumbnail"
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  );
};

export default Thumbnail;
