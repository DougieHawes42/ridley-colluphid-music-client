import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./style.scss";

import { PublicRoute } from "../../utils/routes.js";
import { useSelector } from "react-redux";

import Performing1 from "../../../assets/media/layout-images/performing1.png";
import Performing2 from "../../../assets/media/layout-images/performing2.png";
import Performing3 from "../../../assets/media/layout-images/performing3.png";
import Performing4 from "../../../assets/media/layout-images/performing4.png";

const About = () => {
  const theme = useSelector((state) => state.theme.theme);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const performingImages = [Performing1, Performing2, Performing3, Performing4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % performingImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
              <span>Talk is cheap</span>, but singing is priceless.
            </p>
            <p>
              <span>Words have power</span>, yet music is indestructible.
            </p>
            <p>
              <span>Carve words onto a wall</span>, or sing them into eternity.
            </p>
            <p>
              <span>Heroes have lived only 27 years</span>, yet their souls are
              going anywhere.
            </p>
          </motion.div>
        </section>
        <section className="about-introduction">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              className="about-introduction-image"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundImage: `url(${performingImages[currentImageIndex]})`,
              }}>
              <div className="about-image-placeholder">
                <span>RC</span>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="about-introduction-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <span className="section-label">THE ARTIST</span>
            <h2>
              A LITTLE
              <span>GRIT. </span>A LITTLE
              <span>GLAMOUR.</span>
            </h2>
            <p>
              Ridley Colluphid is no alter ego, it's the part of me that awakens
              when I shed the mask I wear in everyday life.
            </p>
            <p>
              A crucible of the legends who have got me through everything and
              made me the person I am today. I grant myself the mission to carry
              their spirit forward through my music.
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
              <p>
                The roots of all beauty and expression. Be it a genre or the
                ghost in your machine, soul is at the heart of it all. When you
                have soul, your true voice flies free.
              </p>
            </motion.div>
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">02</span>
              <h3>BLUES</h3>
              <p>
                Loss, pain, sorrow, and regret; the poison in the soil where the
                most beautiful flora grows. Nothing gives you the strength to
                endure hard times than the knowledge you are not alone.
              </p>
            </motion.div>
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">03</span>
              <h3>FUNK</h3>
              <p>
                Awakens the beast within, compelling you to move and groove with
                an unstoppable energy. Don't say it, open your heart and let the
                world hear your roar.
              </p>
            </motion.div>
            <motion.div className="about-dna-item" whileHover={{ y: -6 }}>
              <span className="about-dna-number">04</span>
              <h3>ROCK</h3>
              <p>
                "You're never alone, cos you can put on headphones and let the
                drummer tell your heart what to do" - Meat Loaf. Rock grants the
                anthems of rebellion and freedom.
              </p>
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
