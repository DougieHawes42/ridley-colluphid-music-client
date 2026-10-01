import "./style.scss";

import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const theme = useSelector((state) => state.theme.theme);
  const showing = useSelector((state) => state.player.showing);

  return (
    <div
      className={`music-player ${theme === "dark" ? "dark" : "light"} ${showing ? "showing" : "hidden"}`}>
      <div className="music-player-record">
        <div className="music-player-record-inner"></div>
        <div className="music-player-record-center"></div>
      </div>
      <div className="music-player-record-needle"></div>
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
        <div className="music-player-controls-toggle">
          {showing ? "close" : "open"}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
