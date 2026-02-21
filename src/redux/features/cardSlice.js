import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedPost: [],
};
export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.selectedPost.push(action.payload);
        },
        clearPost: (state) => {
            state.selectedPost = [];
        },
    },
});
export const { setPost, clearPost } = postSlice.actions;
export default postSlice.reducer;
