import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./AddToFavorite";

export const store = configureStore({
  reducer: {
    movie: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
