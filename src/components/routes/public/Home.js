import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";

const Home = () => {
  return (
    <PublicRoute title="Home Page">
      <div className="home">
        <h2>Home Page</h2>
      </div>
    </PublicRoute>
  );
};

export default Home;
