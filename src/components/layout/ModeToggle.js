import "./style.scss";

import { useSelector, useDispatch } from "react-redux";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";

import { toggleDarkMode } from "../../redux/themeSlice.js";

const ModeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={`mode-toggle ${theme === "dark" ? "dark" : "light"}`}
      onClick={handleToggle}>
      <FaLightbulb className="mode-toggle-icon" />
      <div className="toggle-slider">
        <div className="slider-thumb"></div>
        <div className="slider-track"></div>
      </div>
      <FaRegLightbulb className="mode-toggle-icon" />
    </div>
  );
};

export default ModeToggle;
