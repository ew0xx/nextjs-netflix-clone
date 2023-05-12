import { modalState, movieState } from "@/atoms/modalAtom";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typings";
import Image from "next/image";
import { useRecoilState } from "recoil";
import Header from "./Header";
import Modal from "./Modal";

interface Props {
  movie: Movie;
}
const Item = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="relative mt-0 pt-0 text-white  w-[200px] text-center text-xl h-[100px]">
          {movie.original_name || movie.title}
        </div>
        <div
          className="relative min-w-[200px] cursor-pointer duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 flex flex-wrap ml-8"
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
            width={300}
            height={200}
            className="rounded-sm object-cover md:rounded"
          />
        </div>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default Item;
