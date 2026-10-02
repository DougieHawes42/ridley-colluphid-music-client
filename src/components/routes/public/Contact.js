import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import { PublicRoute } from "../../utils/routes.js";
import { useSelector } from "react-redux";
import "./style.scss";

const Contact = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <PublicRoute>
      <div className={`contact ${theme === "dark" ? "dark" : "light"}`}>
        <section className="contact-hero">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.p
              className="contact-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              RIDLEY COLLUPHID
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}>
              GET IN TOUCH.
            </motion.h1>

            <motion.p
              className="contact-introduction"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}>
              Music, collaborations, performances, questions, unreasonable
              demands... drop me a line.
            </motion.p>
          </motion.div>

          <motion.div
            className="contact-email-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}>
            <p className="contact-label">DROP ME A LINE</p>

            <a href="mailto:doughawes42@gmail.com" className="contact-email">
              <FaEnvelope />
              <span>ridley.colluphid@funktown.com</span>
            </a>
          </motion.div>

          <motion.div
            className="contact-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}>
            <p className="contact-label">FIND ME ELSEWHERE</p>

            <div className="social-links">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram">
                <FaInstagram />
                <span>Instagram</span>
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube">
                <FaYoutube />
                <span>YouTube</span>
              </a>

              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify">
                <FaSpotify />
                <span>Spotify</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}>
            <span>MUSIC</span>
            <span>•</span>
            <span>PERFORMANCE</span>
            <span>•</span>
            <span>COLLABORATION</span>
          </motion.div>
        </section>
      </div>
    </PublicRoute>
  );
};

export default Contact;
