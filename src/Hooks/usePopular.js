import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_API } from "../utils/utilsLinks";
import { popularMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getMovie = async () => {
        const data = await fetch(POPULAR_API, API_OPTIONS);
        const json = await data.json();
        dispatch(popularMovies(json.results));
    };

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, []);
};

export default useTrendingMovies;