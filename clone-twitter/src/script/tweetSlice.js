import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tweets: []
};

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        addTweet: (state, action) => {
            state.tweets.push(action.payload);
        }
    }
});

export const { addTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
