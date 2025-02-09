import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TRENDING_API } from "../utils/utilsLinks";
import { trendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getMovie = async () => {
        const data = await fetch(TRENDING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(trendingMovies(json.results));
    };

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, []);
};

export default useTrendingMovies;