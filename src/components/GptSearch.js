import { useSelector } from "react-redux";
import { BGLOGO } from "../utils/utilsLinks";
import GptMovieSuggestion from "./GptMovieSuggestion";
import Header from "./Header";
import SearchBar from "./SearchBar";

const GptSearch = () => {
  const movies = useSelector((state) => state.search.searchData);
  const result = useSelector((state) => state.search.searchResult);
  const isLoading = useSelector((state) => state.search.loading);

  return (
    <div className="bg-[#1f1f1f] h-screen">
      <Header />
      <div className="absolute ">
        <img src={BGLOGO} alt="backgroundLogo" className="brightness-50" draggable="false" />
      </div>
      <div className="flex  justify-center pt-[100px] w-full mb-[20px]">
        <SearchBar />

      </div>
      {isLoading ?
        <div className="flex  justify-center mb-[50px]">
          <h1 className="absolute flex items-center justify-center text-white text-[20px] h-[fit] bg-gray-700 bg-opacity-70 rounded p-[10px]">
            Suggesting You The Best Movies...
          </h1>
        </div>
        :
        <div className="flex  justify-center mb-[50px]">
          <h1 className="absolute flex items-center justify-center text-white text-[20px] h-fit bg-gray-700 bg-opacity-70 rounded p-[10px]">
            {result ? `Netflix GPT Suggest You:- ` + result : ""}
          </h1>
        </div>}

      {movies || isLoading ?
        <div className="p-[10px]">
          <GptMovieSuggestion dataResult={movies} data={movies} isLoading={isLoading} />
        </div>
        :
        <div></div>
      }


    </div>
  );
};

export default GptSearch;