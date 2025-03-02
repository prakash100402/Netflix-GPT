import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm)
    return (
        <div className="z-20 flex  py-[15px] w-[550px] items-center rounded-full bg-white border mt-[30px] border-black ">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="ml-[15px] mr-[7px] text-red-700 h-[18px] w-[18px]"
            />
            <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-black outline-none H-14 pl-[4px] focus:text-black blur:text-grey"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
