import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { TRAILER_LINK } from "../utils/utilsLinks";

const VideoBackground = (movieId) => {
    useMovieTrailer(movieId);
    const trailerKey = useSelector((store)=> store?.movies?.trailerVideo);
    const tautoplay = trailerKey?.key + "?autoplay=1&loop=1&mute=1&controls=0&disablekb=1&playlist="+trailerKey?.key;
    
    return (
        <div className="w-screen h-fit pb-[180px]">
            <iframe
                className="w-screen h-[720px] aspect-video bg-center scale-[150%] pointer-events-none bg-gradient-to-r from-black"
                src={TRAILER_LINK+tautoplay}
                title="YouTube video player"
                allow="autoplay; encrypted-media;"
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    );
};

export default VideoBackground;