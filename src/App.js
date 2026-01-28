import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

// components
// layout
import ModeToggle from "./components/layout/ModeToggle";
// routes
// public
import Home from "./components/routes/public/Home";

const App = () => {
  const [darkmodeOn, setDarkmodeOn] = useState(true);

  return (
    <div className={`app ${darkmodeOn ? "app-darkmode" : "app-lightmode"}`}>
      <Routes>
        <Route path="/" element={<Home darkmode={darkmodeOn} />} />
      </Routes>
      <ModeToggle
        onClick={() => setDarkmodeOn(!darkmodeOn)}
        darkmode={darkmodeOn}
      />
    </div>
  );
};

export default App;
