import { Link } from "react-router-dom";

import "./style.scss";

export const Link1 = ({ to, text }) => (
  <Link className="link link1" to={to}>
    {text}
  </Link>
);
