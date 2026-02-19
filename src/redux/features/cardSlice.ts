import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPost } from "../../types/types";

export interface PostState {
  selectedPost: IPost[];
}

const initialState: PostState = {
  selectedPost: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<IPost>) => {
      state.selectedPost.push(action.payload);
    },
    clearPost: (state) => {
      state.selectedPost = [];
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;
export default postSlice.reducer;
