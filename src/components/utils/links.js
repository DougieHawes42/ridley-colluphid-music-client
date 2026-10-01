import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

export const HeaderLink = ({ to, children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <Link
      to={to}
      className={`header-link ${theme === "dark" ? "dark" : "light"}`}>
      {children}
    </Link>
  );
};
