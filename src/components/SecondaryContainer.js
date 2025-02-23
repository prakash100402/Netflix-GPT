import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const nowPlayingMovieList = useSelector((store) => store.movies.nowPlayingMovies);
    const trending = useSelector((store) => store.movies.trendingMovies);
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    return (
        <div className="p-[10px] -mt-5 bg-black">
            <MovieList title={"Trending"} movie={trending} />
            <MovieList title={"Now Playing"} movie={nowPlayingMovieList} />
            <MovieList title={"Popular"} movie={popularMovies} />
            <MovieList title={"Upcoming Movies"} movie={upcomingMovies} />
        </div>
    );
};

export default SecondaryContainer;