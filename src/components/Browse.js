import useNowPlay from "../Hooks/useNowPlay";
import useTrendingMovies from "../Hooks/useNowTrending";
import usePopular from "../Hooks/usePopular";
import useUpcoming from "../Hooks/useUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlay();
    useTrendingMovies();
    usePopular();
    useUpcoming();

    return(
        <div>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browse;