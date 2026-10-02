import { createSlice } from "@reduxjs/toolkit";
import { songs } from "../assets/data/songs.js";

const initialState = {
  playing: false,
  showing: false,
  shuffle: false,
  selectedSong: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    toggleShowing: (state) => {
      state.showing = !state.showing;
    },
    selectSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    togglePlaying: (state) => {
      state.playing = !state.playing;
    },
    previousSong: (state) => {
      state.selectedSong =
        (state.selectedSong - 1 + songs.length) % songs.length;
    },
    nextSong: (state) => {
      if (state.shuffle) {
        let randomSong;

        do {
          randomSong = Math.floor(Math.random() * songs.length);
        } while (randomSong === state.selectedSong);

        state.selectedSong = randomSong;
      } else {
        state.selectedSong = (state.selectedSong + 1) % songs.length;
      }
    },
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },
  },
});

export const {
  toggleShowing,
  togglePlaying,
  previousSong,
  nextSong,
  selectSong,
  toggleShuffle,
} = playerSlice.actions;

export default playerSlice.reducer;
