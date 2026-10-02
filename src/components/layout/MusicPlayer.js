import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaForward,
  FaBackward,
  FaFastForward,
  FaFastBackward,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { FaCaretUp, FaCaretDown, FaShuffle } from "react-icons/fa6";

import "./style.scss";

import {
  toggleShowing,
  togglePlaying,
  previousSong,
  nextSong,
  selectSong,
  toggleShuffle,
} from "../../redux/playerSlice.js";

// hard coding
import { songs } from "../../assets/data/songs.js";

const MusicPlayer = () => {
  const selectedSong = useSelector((state) => state.player.selectedSong);
  const [focusedSong, setFocusedSong] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const dispatch = useDispatch();

  const playing = useSelector((state) => state.player.playing);
  const showing = useSelector((state) => state.player.showing);
  const shuffle = useSelector((state) => state.player.shuffle);
  const theme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleShowing());
  };

  const handleFocusSelect = (index, direction) => {
    if (direction === "next") {
      setFocusedSong((prev) => (prev + 1) % songs.length);
    } else if (direction === "prev") {
      setFocusedSong((prev) => (prev - 1 + songs.length) % songs.length);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [selectedSong]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleSongEnded = () => {
      if (shuffle) {
        const randomSong = Math.floor(Math.random() * songs.length);

        dispatch(selectSong(randomSong));
      } else {
        dispatch(nextSong());
      }
    };

    audio.addEventListener("ended", handleSongEnded);

    return () => {
      audio.removeEventListener("ended", handleSongEnded);
    };
  }, [shuffle, dispatch]);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing, selectedSong]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleForward = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 5,
      audioRef.current.duration,
    );
  };

  const handleBackward = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 5,
      0,
    );
  };

  return (
    <div className={`music-player ${theme === "dark" ? "dark" : "light"}`}>
      <audio
        ref={audioRef}
        src={songs[selectedSong].track}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      />
      <div
        className={`music-player-record ${!showing && "hidden"} ${playing && "playing"}`}>
        <div
          className="music-player-record-inner"
          style={{
            backgroundImage: `url("${songs[selectedSong].image}")`,
          }}></div>
        <div className="music-player-record-center"></div>
        <div className="music-player-record-hole"></div>
      </div>
      <div className={`music-player-selection ${!showing ? "hidden" : ""}`}>
        <div className="music-player-selection-track">
          <p className="music-player-selection-track-title">
            {songs[focusedSong - 1]?.title ||
              songs[songs.length - 1]?.title ||
              ""}
          </p>
          <p className="music-player-selection-track-artist">
            {songs[focusedSong - 1]?.artist ||
              songs[songs.length - 1]?.artist ||
              ""}
          </p>
        </div>
        <div
          className="music-player-selection-track current"
          onClick={() => dispatch(selectSong(focusedSong))}>
          <p className="music-player-selection-track-title">
            {songs[focusedSong].title}
          </p>
          <p className="music-player-selection-track-artist">
            {songs[focusedSong].artist}
          </p>
        </div>
        <div className="music-player-selection-track">
          <p className="music-player-selection-track-title">
            {songs[focusedSong + 1]?.title || songs[0]?.title || ""}
          </p>
          <p className="music-player-selection-track-artist">
            {songs[focusedSong + 1]?.artist || songs[0]?.artist || ""}
          </p>
        </div>
        <div className="music-player-selection-buttons">
          <FaCaretUp
            className="music-player-selection-button"
            onClick={() => handleFocusSelect(focusedSong, "prev")}
          />
          <FaCaretDown
            className="music-player-selection-button"
            onClick={() => handleFocusSelect(focusedSong, "next")}
          />
        </div>
      </div>
      <div className="music-player-controls">
        <div className="music-player-controls-playing">
          <div className="music-player-controls-playing-song">
            <div className="music-player-controls-playing-title">
              {songs[selectedSong].title}
            </div>
            <div className="music-player-controls-playing-artist">
              {songs[selectedSong].artist}
            </div>
          </div>
        </div>
        <div className="music-player-controls-progress">
          <div className="music-player-controls-progress-upper">
            <div className="music-player-controls-progress-buttons">
              <FaFastBackward onClick={() => dispatch(previousSong())} />
              <FaBackward onClick={() => handleBackward()} />
              <div></div>
              {playing ? (
                <FaPause onClick={() => dispatch(togglePlaying())} />
              ) : (
                <FaPlay onClick={() => dispatch(togglePlaying())} />
              )}
              <FaShuffle
                className={`music-player-controls-shuffle-button ${!shuffle && "not-active"}`}
                onClick={() => dispatch(toggleShuffle())}
              />
              <FaForward onClick={() => handleForward()} />
              <FaFastForward onClick={() => dispatch(nextSong())} />
            </div>
            <div className="music-player-controls-progress-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="music-player-controls-progress-bar-container">
            <div className="music-player-controls-progress-bar"></div>
            <div
              className="music-player-controls-progress-bar-tag"
              style={{ left: `${progress}%` }}></div>
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
