import { BGLOGO } from "../utils/utilsLinks";
import Header from "./Header";
import SearchBar from "./SearchBar";

const GptSearch = () => {
  return (
    <div className="bg-[#1f1f1f] h-screen">
      <Header />
      <div className="absolute ">
        <img src={BGLOGO} alt="backgroundLogo" className="brightness-50" draggable="false" />
      </div>
      <div className="flex  justify-center pt-[100px] w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default GptSearch;