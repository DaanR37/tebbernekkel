import React, { useEffect, useState } from "react";
import Animatedpage from "../../../Animatedpage";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function EmbeddedPlayerSimonSpecial() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch("http://localhost:3001/fictionsimoncarrousel")
    fetch("https://api.tebbernekkel.nl/fictionsimoncarrousel")
      .then(response => response.json())
      .then(data => {
        setVideos(data)
        console.log(data)
      }).catch(error => {
        console.log(error.message)
      })
  }, []);

  /* Previous & Next */
  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };
  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: { opacity: 0 }
  };

  if (!videos || videos.length === 0) {
    return <p>Loading carrousel videos...</p>;
  };

  const video = videos[currentIndex];
  const videoId = video.uri.split("/").pop();
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}`;

  const handleClose = () => {
    navigate("/fictionsimon")
  };

  return (
    <Animatedpage>
      <section className="embedded_player_special">
        <div className="times" onClick={handleClose}>
          <img src="images/times-circle-regular-copy.svg" alt="times" />
        </div>
        {/* Container Buttons & Player */}
        <div className="button-player-container">

          <motion.button
            whileHover={{
              backgroundColor: "#555555",
              transition: { duration: 0.3 },
            }}
            className="arrow-button left"
            onClick={prevVideo}
          >
            <img src="images/arrows-slider-copy.svg" alt="arrows" />
          </motion.button>
          {/* Player */}
          <AnimatePresence mode="wait">
            <motion.div
              key={video.uri}
              variants={variants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="embedded-player-special"
            >
              <iframe
                src={vimeoUrl}
                title={video.name}
                responsive="true"
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </AnimatePresence>
          <motion.button
            whileHover={{
              backgroundColor: "#555555",
              transition: { duration: 0.3 },
            }}
            className="arrow-button right"
            onClick={nextVideo}
          >
            <img src="images/arrows-slider-copy.svg" alt="arrows" />
          </motion.button>
        </div>
      </section>
    </Animatedpage >
  )
}
