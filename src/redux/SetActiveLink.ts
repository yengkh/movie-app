import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  activeLink: string;
}

const initialState: StateType = {
  activeLink: "Home",
};

const setActiveLinkSlice = createSlice({
  name: "setActiveLinkSlice",
  initialState,
  reducers: {
    changeActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload;
    },
  },
});

export const { changeActiveLink } = setActiveLinkSlice.actions;
export default setActiveLinkSlice.reducer;
