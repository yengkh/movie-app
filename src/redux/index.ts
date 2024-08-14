import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./AddToFavorite";
import setActiveLinkReducer from "./SetActiveLink";
import recommentMoviListSlice from "./RecommentMovieList";

export const store = configureStore({
  reducer: {
    movie: favoriteReducer,
    setActiveLinkSlice: setActiveLinkReducer,
    recommentMoviListSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
