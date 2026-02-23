import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  items: number[]; // product id list
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      if (state.items.includes(productId)) {
        // remove
        state.items = state.items.filter((id) => id !== productId);
      } else {
        // add
        state.items.push(productId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
