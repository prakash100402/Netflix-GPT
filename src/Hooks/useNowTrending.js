import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TRENDING_API } from "../utils/utilsLinks";
import { trendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trending = useSelector((store) => store.movies.trendingMovies);


    const getMovie = async () => {
        const data = await fetch(TRENDING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(trendingMovies(json.results));
    };

    useEffect(() => {
        !trending && getMovie();
        // eslint-disable-next-line
    }, []);
};

export default useTrendingMovies;