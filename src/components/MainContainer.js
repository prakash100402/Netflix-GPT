import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle"

const MainContainer = () =>{
    const movie = useSelector((store)=>store?.movies?.nowPlayingMovies);
    if(!movie) return;
    const random = Math.floor(Math.random() * 21);
    const mainMovie = movie[random];
    if(!mainMovie) return;
    const {original_title, overview, id} = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    );
};

export default MainContainer;