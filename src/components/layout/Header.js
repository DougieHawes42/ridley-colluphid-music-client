import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <navbar className="navbar">
        <div className="link">link1</div>
        <div className="link">link2</div>
        <div className="link">link3</div>
      </navbar>
      <div className="header-title-container">
        <h1 className="header-title">RIDLEY COLLUPHID</h1>
      </div>
      <navbar className="navbar">
        <div className="link">link4</div>
        <div className="link">link5</div>
        <div className="link">link6</div>
      </navbar>
    </div>
  );
};

export default Header;
