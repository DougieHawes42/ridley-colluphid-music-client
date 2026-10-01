import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice.js";
import playerReducer from "./playerSlice.js";
import themeReducer from "./themeSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    player: playerReducer,
    theme: themeReducer,
  },
});

export default store;
