import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"search",
    initialState:{
        searchData: null,
        searchResult: null,
        loading: false,
    },
    reducers:{
        addSearchData: (state, action) =>{
            state.searchData = action.payload;
        },
        addSearchResult: (state, action) =>{
            state.searchResult = action.payload;
        },
        setLoader: (state, action) =>{
            state.loading = action.payload;
        },
        remove: (state) =>{
            state.searchData = null;
            state.searchResult = null;
            state.loading = false;
        }
    },
});

export const { addSearchData, addSearchResult, setLoader, remove } = movieSlice.actions;
export default movieSlice.reducer;