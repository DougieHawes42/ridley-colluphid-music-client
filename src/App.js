import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

// components
// layout
import Header from "./components/layout/Header";
import MusicPlayer from "./components/layout/MusicPlayer";
// routes
// public
import Home from "./components/routes/public/Home";

const App = () => {
  return (
    <div className="app app-darkmode">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MusicPlayer />
    </div>
  );
};

export default App;
