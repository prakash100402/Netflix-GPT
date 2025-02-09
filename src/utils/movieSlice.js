import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        trendingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        horrorMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        trendingMovies: (state, action) =>{
            state.trendingMovies = action.payload;
        },
        popularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        upcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        horrorMovies: (state, action) =>{
            state.horrorMovies = action.payload;
        },
        addPlayingTrailer : (state, action) =>{
            state.trailerVideo = action.payload;
        },
        remove: (state) =>{
            state.nowPlayingMovies = null;
            state.trailerVideo = null;
            state.trendingMovies = null;
            state.upcomingMovies = null;
            state.horrorMovies = null;
            state.popularMovies = null;
        }
    },
});

export const { addNowPlayingMovies, addPlayingTrailer, trendingMovies, upcomingMovies, popularMovies, horrorMovies, remove } = movieSlice.actions;
export default movieSlice.reducer;