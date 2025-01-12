import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPlayingTrailer : (state, action) =>{
            state.trailerVideo = action.payload;
        },
        remove: (state) =>{
            state.nowPlayingMovies = null;
            state.trailerVideo = null;
        }
    },
});

export const { addNowPlayingMovies, addPlayingTrailer, remove } = movieSlice.actions;
export default movieSlice.reducer;