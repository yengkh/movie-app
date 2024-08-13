import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./AddToFavorite";
import setActiveLinkReducer from "./SetActiveLink";

export const store = configureStore({
  reducer: {
    movie: favoriteReducer,
    setActiveLinkSlice: setActiveLinkReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
