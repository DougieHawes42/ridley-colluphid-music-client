import { motion } from "framer-motion";

import "./style.scss";

import { useSelector } from "react-redux";

import { PublicRoute } from "../../utils/routes.js";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <PublicRoute>
      <div className={`home-hero ${theme === "dark" ? "dark" : "light"}`}>
        <div className="home-hero-glow"></div>
        <div className="home-hero-grain"></div>
        <div className="home-hero-content">
          <motion.div
            className="home-hero-eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            <span className="home-hero-line"></span>
            THE SOUND OF SOMETHING DIFFERENT
          </motion.div>

          <motion.h1
            className="home-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}>
            RIDLEY
            <span>COLLUPHID</span>
          </motion.h1>

          <motion.div
            className="home-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}>
            <span>SOUL</span>
            <i>•</i>
            <span>BLUES</span>
            <i>•</i>
            <span>ROCK 'N' ROLL</span>
            <i>•</i>
            <span>ATTITUDE</span>
          </motion.div>

          <motion.p
            className="home-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}>
            Music with a little grit, a little glamour, and a whole lot of soul.
            <br />
            No rules. No apologies. Just music.
          </motion.p>

          <motion.div
            className="home-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8 }}>
            <Link to="/about" className="home-hero-button primary">
              EXPLORE THE MUSIC
              <span>↗</span>
            </Link>

            <Link to="/blog" className="home-hero-button secondary">
              THE STORY
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="home-hero-vinyl"
          initial={{ opacity: 0, scale: 0.65, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 65,
            damping: 15,
          }}>
          <div className="home-hero-vinyl-disc">
            <div className="home-hero-vinyl-label">
              <span>RC</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="home-hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}>
          <span>TURN IT UP.</span>
          <span>FEEL SOMETHING.</span>
          <span>REPEAT.</span>
        </motion.div>
      </div>
    </PublicRoute>
  );
};

export default Home;
