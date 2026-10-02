import { motion } from "framer-motion";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <PublicRoute>
      <div className={`about-page ${theme === "dark" ? "dark" : "light"}`}>
        <section className="about-hero">
          <motion.div
            className="about-hero-heading"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <span className="about-eyebrow">THE STORY BEHIND THE MUSIC</span>
            <h1>
              THIS IS
              <span>RIDLEY</span>
              <span>COLLUPHID.</span>
            </h1>
          </motion.div>
          <motion.div
            className="about-hero-statement"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}>
            <p>
              Music isn't supposed to sit quietly in the background. It's
              supposed to make you feel something.
            </p>
          </motion.div>
        </section>
        <section className="about-introduction">
          <motion.div
            className="about-introduction-image"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className="about-image-placeholder">
              <span>RC</span>
            </div>
          </motion.div>
          <motion.div
            className="about-introduction-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <span className="section-label">THE ARTIST</span>
            <h2>
              A LITTLE
              <span>GRIT.</span>A LITTLE
              <span>GLAMOUR.</span>
            </h2>
            <p>
              Ridley Colluphid is a musical project built around the sounds that
              refuse to disappear.
            </p>
            <p>
              Soul. Blues. Funk. Rock 'n' roll. Music with swagger, character
              and a little bit of danger around the edges.
            </p>
            <p>
              The aim isn't to recreate the past. It's to take everything that
              made those records special and give it somewhere new to live.
            </p>
          </motion.div>
        </section>
        <section className="about-dna">
          <motion.div
            className="about-dna-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <span className="section-label">MUSICAL DNA</span>
            <h2>
              THE RECORDS
              <span>THAT LEFT A MARK.</span>
            </h2>
          </motion.div>
          <div className="about-dna-grid">
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">01</span>
              <h3>SOUL</h3>
              <p>Raw voices. Big feelings. Music that gets under your skin.</p>
            </motion.div>
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">02</span>
              <h3>BLUES</h3>
              <p>
                Grit, groove and the beautiful imperfection of a human
                performance.
              </p>
            </motion.div>
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">03</span>
              <h3>FUNK</h3>
              <p>
                Rhythm first. Attitude second. Never stand still for too long.
              </p>
            </motion.div>
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">04</span>
              <h3>ROCK</h3>
              <p>Volume up. Lights down. Let the song do the talking.</p>
            </motion.div>
          </div>
        </section>
        <motion.section
          className="about-manifesto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}>
          <div className="about-manifesto-mark">RC</div>
          <blockquote>
            Some music is made to be heard.
            <span>Some music is made to be felt.</span>
          </blockquote>
          <div className="about-manifesto-line"></div>
          <p>TURN IT UP. FEEL SOMETHING. REPEAT.</p>
        </motion.section>
      </div>
    </PublicRoute>
  );
};

export default About;
