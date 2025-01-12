import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS, MOVIE_API } from "../utils/utilsLinks";

const useNowPlay = () => {
    const dispatch = useDispatch();

    const getMovie = async () => {
        const data = await fetch(MOVIE_API, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, []);
};

export default useNowPlay;