import axios from "axios";

import { useState, useEffect } from "react";

import "./style.scss";

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const fetchedMessage = await axios.get(
        `${process.env.REACT_APP_API_URL}/api`,
      );

      setWelcomeMessage(fetchedMessage.data.message);
    };

    fetchMessage();
  }, []);

  return <div className="Home">Home - {welcomeMessage}</div>;
};

export default Home;
