import "./style.scss";

import { HeaderLink } from "../utils/links.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HeaderLink to="/about">About</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
      <HeaderLink to="/blog">Blog</HeaderLink>
    </nav>
  );
};

export default Navbar;
