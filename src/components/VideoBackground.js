import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { TRAILER_LINK } from "../utils/utilsLinks";


const VideoBackground = (movieId) => {
    useMovieTrailer(movieId);
    const trailerKey = useSelector((store)=> store?.movies?.trailerVideo);
    
    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video bg-center scale-150"
                src={TRAILER_LINK+trailerKey?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    );
};

export default VideoBackground;