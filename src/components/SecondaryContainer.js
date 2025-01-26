import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{

    const nowPlayingMovieList = useSelector((store)=>store.movies.nowPlayingMovies);

    return (
        <div className="m-[10px]">
            <MovieList title={"Now Playing"} movie={nowPlayingMovieList}/>
        </div>
    );
};

export default SecondaryContainer;