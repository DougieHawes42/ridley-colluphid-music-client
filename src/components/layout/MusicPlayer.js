import "./style.scss";

import { useSelector, useDispatch } from "react-redux";
import { toggleShowing } from "../../redux/playerSlice.js";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const showing = useSelector((state) => state.player.showing);

  const handleToggle = () => {
    dispatch(toggleShowing());
  };

  return (
    <div className={`music-player ${theme === "dark" ? "dark" : "light"}`}>
      <div className={`music-player-record ${!showing ? "hidden" : ""}`}>
        <div className="music-player-record-inner"></div>
        <div className="music-player-record-center"></div>
        <div className="music-player-record-hole"></div>
      </div>
      <div className={`music-player-selection ${!showing ? "hidden" : ""}`}>
        <div className="music-player-selection-track"></div>
        <div className="music-player-selection-track current"></div>
        <div className="music-player-selection-track"></div>
      </div>
      <div className="music-player-controls">
        <div className="music-player-controls-playing">
          <div className="music-player-controls-playing-song">
            <div className="music-player-controls-playing-title">
              Love is a Fire
            </div>
            <div className="music-player-controls-playing-artist">
              Genya Ravan
            </div>
          </div>
        </div>
        <div
          className="music-player-controls-toggle"
          onClick={() => handleToggle()}>
          {showing ? "close" : "open"}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
