import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../src/script/post'; 

export const store = configureStore({
    reducer: {
        post: postReducer,
    },
});
