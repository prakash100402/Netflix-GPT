import { movieImage } from "../utils/utilsLinks";

const MovieCard = ({ list }) => {
  return (
    <div className="flex-none">
      <div className="w-[200px] h-auto ">
        <img
          draggable="false"
          alt={list?.original_title || "Movie Poster"}
          src={list?.poster_path ? movieImage + list.poster_path : "https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg"}
          className="rounded-lg shadow-md p-[10px]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg";
          }}
        />

      </div>
    </div>
  );
};

export default MovieCard;
