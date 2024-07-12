import { configureStore } from '@reduxjs/toolkit';
import tweetReducer from './script/tweetSlice'; 
export const store = configureStore({
    reducer: {
        tweet: tweetReducer,
       
    },
});
