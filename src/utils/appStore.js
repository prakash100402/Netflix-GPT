import { configureStore } from '@reduxjs/toolkit';
import useReducer from './userSlice';
import movieReducer from './movieSlice';
import searchReducer from './searchSlice';

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: movieReducer,
        search: searchReducer,
    },
});

export default appStore;