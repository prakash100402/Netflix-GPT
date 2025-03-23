import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = ({ data, isLoading }) => {

    return (
      <div>
        <div className="absolute flex flex-wrap justify-evenly h-[700px] overflow-auto bg-black bg-opacity-80 p-[10px] rounded-[10px] mx-[20px]">
          {isLoading
            ? Array(18)
                .fill(0)
                .map((_, index) => <Shimmer key={index} />)
            : data?.map((movie) => (
                <div key={movie?.id} className="h-fit w-[200px]">
                  <MovieCard list={movie} />
                  <div className=" flex items-center justify-center">
                  <h1 className="text-white break-words text-center mt-[5px] w-[180px] h-fit bg-gray-700 rounded">{movie?.title}</h1></div>
                </div>
              ))}
        </div>
      </div>
    );
  };

export default GptMovieSuggestion;
