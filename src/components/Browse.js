import useNowPlay from "../Hooks/useNowPlay";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlay();

    return(
        <div className="flex">
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browse;