import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div className="p-1 pb-[20px]">
      <h1 className="text-xl font-bold mb-4 pl-[8px] text-white">{title}</h1>
      <div className="flex flex-row overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {movie?.map((movie) => (
          <MovieCard key={movie.id} list={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
