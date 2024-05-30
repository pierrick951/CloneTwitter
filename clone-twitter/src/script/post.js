import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Définir l'état initial
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        // Définir des reducers ici
        addPost: (state, action) => {
            // Logique pour ajouter un post
        },
    },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
