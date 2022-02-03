import { useState, useEffect } from "react";
import ReactPlayer from "react-player/vimeo";
import Card from "./Cards/Card";
import "./featured.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade, Keyboard, Lazy } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/bundle";

export default function Featured() {
  const [current, setCurrent] = useState(0);
  const [featureData, setFeatureData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  //FETCHING DATA
  useEffect(() => {
    fetch("http://localhost:3001/featured")
      .then((response) => response.json())
      .then((featureData) => {
        setFeatureData(featureData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => oldProgress + 1);
      // setProgress(progress + 1);
      if ((progress + 1) % 100 === 0) {
        // setProgress((oldProgress) => oldProgress + 1);
        // setCurrent(current === featureData.length - 1 ? 0 : current + 1);
        setCurrent((prevCurrent) => {
          return prevCurrent === featureData.length - 1 ? 0 : current + 1;
        });

        current === featureData.length - 1 ? swiperRef.slideTo(0) : swiperRef.slideTo(current + 1);
        console.log("DONE!!", swiperRef.activeIndex);
      }
    }, 150);
    return () => clearInterval(interval);
  });

  return (
    <section id="featured">
      <Swiper
        onSlideChange={(e) => {
          setCurrent(e.activeIndex);
          setProgress(1);
        }}
        onSwiper={setSwiperRef}
        effect={"fade"}
        modules={[Lazy, EffectFade, Mousewheel, Keyboard]}
        direction="vertical"
        centeredSlides={true}
        keyboard={true}
        mousewheel={true}
        lazy={true}
        cssMode
      >
        {featureData.map((video, index) => {
          let url = "https://player.vimeo.com" + video.uri.replace("/videos/", "/video/");
          return (
            // <div key={index} className={`featured-item ${index === current ? "active" : ""}`}>
            <SwiperSlide key={index}>
              <ReactPlayer
                controls
                width="100vw"
                height="100vh"
                url={url}
                config={{
                  playerOptions: {
                    background: true,
                    quality: "720p",
                    dnt: true,
                    loop: true,
                    playsInline: true,
                  },
                }}
              />
            </SwiperSlide>
            // </div>
          );
        })}
      </Swiper>
      <Card title={featureData[current]?.name} active={true} progress={progress} />
    </section>
  );
}
