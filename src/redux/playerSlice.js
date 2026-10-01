import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showing: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    toggleShowing: (state) => {
      state.showing = !state.showing;
    },
  },
});

export const { toggleShowing } = playerSlice.actions;

export default playerSlice.reducer;
