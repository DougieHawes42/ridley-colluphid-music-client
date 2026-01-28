import "./style.scss";

const Home = ({ darkmode }) => {
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
    <div className="Home">
      <div
        className={`songs-container ${darkmode ? "songs-container-darkmode" : "songs-container-lightmode"}`}
      >
        {songs.map((s) => (
          <div className="song" key={s.id}>
            <h3 className="song-title">{s.title}</h3>
            <p className="song-artist">{s.originalArtist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
