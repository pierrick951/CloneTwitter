import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


const initialState = {
    tweets: []
};

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        addTweet: (state, action) => {
            const tweet = { ...action.payload, id: nanoid() };
            state.tweets.push(tweet);
        },
        removeTweet: (state, action) => {
            state.tweets = state.tweets.filter(tweet => tweet.id !== action.payload)
        }
    }
});

export const { addTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
