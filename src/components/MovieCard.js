import { movieImage } from "../utils/utilsLinks";

const MovieCard = ({ list }) => {
  return (
    <div className="flex-none">
      <div className="w-[200px] h-auto ">
        <img
          draggable="false"
          alt={list?.original_title || "Movie Poster"}
          src={movieImage + list?.poster_path}
          className="rounded-lg shadow-md p-[10px]"
        />
      </div>
    </div>
  );
};

export default MovieCard;
