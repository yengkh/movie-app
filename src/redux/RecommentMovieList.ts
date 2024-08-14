import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopViewTypes } from "../types/types";

export type RecommentMoviListType = {
  items: TopViewTypes[];
  currentPage: number;
};

const initialState: RecommentMoviListType = {
  items: [],
  currentPage: 1,
};

const RecommentMoviListSlice = createSlice({
  name: "recommentMoviListSlice",
  initialState,
  reducers: {
    getItems(state, actions: PayloadAction<Array<TopViewTypes>>) {
      state.items = actions.payload;
    },
    getCurrentPage(state, actions: PayloadAction<number>) {
      state.currentPage = actions.payload;
    },
  },
});
export const { getItems, getCurrentPage } = RecommentMoviListSlice.actions;

export default RecommentMoviListSlice.reducer;
