import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./assets/styles/style.scss";

// layout
import Header from "./components/layout/Header.js";
import ModeToggle from "./components/layout/ModeToggle.js";
import MusicPlayer from "./components/layout/MusicPlayer.js";
// routes
// auth routes
import SignIn from "./components/routes/auth/SignIn.js";
// public routes
import Home from "./components/routes/public/Home.js";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`app ${theme === "dark" ? "app-dark-mode" : "app-light-mode"} `}>
      <Header />
      <Routes>
        {/* public */}
        <Route path={"/"} element={<Home />} />
        {/* auth */}
        <Route
          path={`${process.env.REACT_APP_PRIVATE_ROUTE}/sign-in`}
          element={<SignIn />}
        />
      </Routes>
      <ModeToggle />
      <MusicPlayer />
    </div>
  );
};

export default App;
