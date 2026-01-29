import { Link1 } from "../utils/links";

import "./style.scss";

const Header = ({ darkmode }) => {
  return (
    <div
      className={`header ${darkmode ? "header-darkmode" : "header-lightmode"}`}
    >
      <navbar className="navbar">
        <Link1 to="/" text="home" />
        <Link1 to="/contact" text="contact" />
        <Link1 to="/about" text="about" />
      </navbar>
      <div className="header-title-container">
        <h1 className="header-title">RIDLEY COLLPHID</h1>
      </div>
      <navbar className="navbar">
        <Link1 to="/heroes" text="heroes" />
        <Link1 to="/socials" text="socials" />
        <Link1 to="/blog" text="blog" />
      </navbar>
    </div>
  );
};

export default Header;
