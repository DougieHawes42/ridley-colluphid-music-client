import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

// components
// layout
import Header from "./components/layout/Header";
import ModeToggle from "./components/layout/ModeToggle";
import MusicPlayer from "./components/layout/MusicPlayer";
// routes
// public
import Home from "./components/routes/public/Home";

const App = () => {
  const [darkmodeOn, setDarkmodeOn] = useState(true);

  return (
    <div className={`app ${darkmodeOn ? "app-darkmode" : "app-lightmode"}`}>
      <Header darkmode={darkmodeOn} />
      <Routes>
        <Route path="/" element={<Home darkmode={darkmodeOn} />} />
      </Routes>
      <MusicPlayer darkmode={darkmodeOn} />
      <ModeToggle
        onClick={() => setDarkmodeOn(!darkmodeOn)}
        darkmode={darkmodeOn}
      />
    </div>
  );
};

export default App;
