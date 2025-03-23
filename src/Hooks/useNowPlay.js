import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIE_API } from "../utils/utilsLinks";

const useNowPlay = () => {
    const dispatch = useDispatch();
    const nowPlayingMovieList = useSelector((store) => store.movies.nowPlayingMovies);

    const getMovie = async () => {
        const data = await fetch(MOVIE_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        !nowPlayingMovieList && getMovie();
        // eslint-disable-next-line
    }, []);
};

export default useNowPlay;