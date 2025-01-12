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
    },
});

export const { addNowPlayingMovies, addPlayingTrailer } = movieSlice.actions;
export default movieSlice.reducer;