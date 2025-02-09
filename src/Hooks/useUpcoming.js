import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_API } from "../utils/utilsLinks";
import { upcomingMovies } from "../utils/movieSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();

    const getMovie = async () => {
        const data = await fetch(UPCOMING_API, API_OPTIONS);
        const json = await data.json();
        dispatch(upcomingMovies(json.results));
    };

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, []);
};

export default useUpcoming;