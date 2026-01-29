import { useState } from "react";

import { FaCaretLeft } from "react-icons/fa";
import {
  HiChevronUp,
  HiChevronDown,
  HiChevronDoubleDown,
  HiChevronDoubleUp,
} from "react-icons/hi";

import "./style.scss";

const MusicPlayer = ({ darkmode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [songIndex, setSongIndex] = useState(0);

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

  const scrollUp = () => {
    setSongIndex(songIndex <= 0 ? songs.length - 1 : songIndex - 1);
  };
  const scrollDown = () => {
    setSongIndex(songIndex >= songs.length - 1 ? 0 : songIndex + 1);
  };

  return (
    <div
      className={`music-player ${darkmode ? "music-player-darkmode" : "music-player-lightmode"}`}
    >
      {isOpen && (
        <div
          className="music-player-outside"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`music-player-selection ${isOpen ? "music-player-selection-open" : "music-player-selection-closed"}`}
      >
        <div className="music-player-screen-container">
          <div className="music-player-screen"></div>
        </div>
        <div className="music-player-songs-container">
          <div className="music-player-songs-song">
            <h3 className="music-player-songs-song-title">
              {songs[songIndex == 0 ? songs.length - 1 : songIndex - 1].title}
            </h3>
            <p className="music-player-songs-song-artist">
              {
                songs[songIndex == 0 ? songs.length - 1 : songIndex - 1]
                  .originalArtist
              }
            </p>
          </div>
          <div className="music-player-songs-song">
            <h3 className="music-player-songs-song-title">
              {songs[songIndex].title}
            </h3>
            <p className="music-player-songs-song-artist">
              {songs[songIndex].originalArtist}
            </p>
          </div>
          <div className="music-player-songs-song">
            <h3 className="music-player-songs-song-title">
              {songs[songIndex == songs.length - 1 ? 0 : songIndex + 1].title}
            </h3>
            <p className="music-player-songs-song-artist">
              {
                songs[songIndex == songs.length - 1 ? 0 : songIndex + 1]
                  .originalArtist
              }
            </p>
          </div>
          <div className="music-player-songs-icons">
            <div className="music-player-songs-icons-left">
              <FaCaretLeft className="music-player-songs-current-icon" />
            </div>
            <div className="music-player-songs-icons-right">
              <HiChevronUp
                className="music-player-songs-scroll-icon"
                onClick={scrollUp}
              />
              <HiChevronDown
                className="music-player-songs-scroll-icon"
                onClick={scrollDown}
              />
            </div>
          </div>
        </div>
      </div>
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
                  {songs[songIndex].title}
                </h3>
              </div>
              <p className="music-player-current-song-artist">
                {songs[songIndex].originalArtist}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
