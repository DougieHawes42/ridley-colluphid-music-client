import { FiMoon, FiSun } from "react-icons/fi";

import "./style.scss";

const ModeToggle = ({ onClick, darkmode }) => {
  return (
    <div className="mode-toggle" onClick={onClick}>
      {darkmode ? <FiSun /> : <FiMoon />}
    </div>
  );
};

export default ModeToggle;
