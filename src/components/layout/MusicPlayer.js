import { useState } from "react";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

import "./style.scss";

const MusicPlayer = ({ darkmode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const songs = [
    { id: 1, title: "Unchain My Heart", originalArtist: "Ray Charles" },
    { id: 2, title: "Love Is A Fire", originalArtist: "Genya Ravan" },
    { id: 3, title: "Mustang Sally", originalArtist: "Wilson Pickett" },
    { id: 4, title: "Hard To Handle", originalArtist: "Otis Redding" },
    { id: 5, title: "Dangerous Things", originalArtist: "Strange Fruit" },
    {
      id: 6,
      title: "Do Right Woman, Do Right Man",
      originalArtist: "Aretha Franklin",
    },
    {
      id: 7,
      title: "I Put A Spell On You",
      originalArtist: "Nina Simone",
    },
    {
      id: 8,
      title: "You Are Always On My Mind",
      originalArtist: "Willie Nelson",
    },
  ];

  return (
    <div
      className={`music-player ${darkmode ? "music-player-darkmode" : "music-player-lightmode"}`}
    >
      {isOpen && (
        <div className="music-player-selection">
          <div className="music-player-screen-container">
            <div className="music-player-screen"></div>
          </div>
          <div className="music-player-songs-container">
            {songs.map((s) => (
              <div className="music-player-songs-song" key={s.id}>
                <h3 className="music-player-songs-song-title">{s.title}</h3>
                <p className="music-player-songs-song-artist">
                  {s.originalArtist}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="music-player-collapsed">
        <div
          className="music-player-toggle-container"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiChevronDoubleDown className="music-player-toggle-icon" />
          ) : (
            <HiChevronDoubleUp className="music-player-toggle-icon" />
          )}
        </div>
        <div className="music-player-details-container">
          <div className="music-player-details">
            <div className="music-player-current-song">
              <div className="music-player-current-song-title-container">
                <h3 className="music-player-current-song-title">
                  Unchain My Heart
                </h3>
              </div>
              <p className="music-player-current-song-artist">Ray Charles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
