import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

import Navbar from "./Navbar.js";

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <header className={`header ${theme === "dark" ? "dark" : "light"}`}>
      <Link to="/">
        <h1 className="header-title">Ridley Colluphid</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
