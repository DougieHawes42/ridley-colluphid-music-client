import { useSelector } from "react-redux";

import "./style.scss";

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <header
      className={`header ${theme === "dark" ? "header-dark-mode" : "header-light-mode"}`}>
      <h1 className="header-title">Ridley Colluphid</h1>
    </header>
  );
};

export default Header;
