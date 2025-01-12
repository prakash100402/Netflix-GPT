import { useEffect } from "react";
import { API_OPTIONS } from "../utils/utilsLinks";
import { useDispatch } from "react-redux";
import { addPlayingTrailer } from "../utils/movieSlice";

const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addPlayingTrailer(trailer));
    };

    useEffect(() => {
        getMovieVideo();
        // eslint-disable-next-line
    }, []);

};

export default useMovieTrailer;