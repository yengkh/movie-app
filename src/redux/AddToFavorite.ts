import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopViewTypes } from "../types/types";
export interface FavoriteState {
  items: TopViewTypes[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addToFavorite(state, actions: PayloadAction<TopViewTypes>) {
      state.items.push(actions.payload);
    },
    remoeFromFavorite(state, actions: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
  },
});
export const { addToFavorite, remoeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
