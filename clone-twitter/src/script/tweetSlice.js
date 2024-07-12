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
        },
        toggleLike: (state, action) => {
            const tweet = state.tweets.find(tweet => tweet.id === action.payload);
            if (tweet) {
                tweet.like = tweet.like === 0 ? 1 : 0;
            }
        }
    }
});

export const { addTweet, removeTweet, toggleLike } = tweetSlice.actions;
export default tweetSlice.reducer;
