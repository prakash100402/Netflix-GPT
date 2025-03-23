import { useEffect } from "react";
import { API_OPTIONS } from "../utils/utilsLinks";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingTrailer } from "../utils/movieSlice";

const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store) => store?.movies?.trailerVideo);
    
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addPlayingTrailer(trailer));
    };

    useEffect(() => {
        !trailer && getMovieVideo();
        // eslint-disable-next-line
    }, []);

};

export default useMovieTrailer;