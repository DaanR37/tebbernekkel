import { useState, useEffect, useMemo } from "react";
import ReactPlayer from "react-player/vimeo";
import Card from "./Cards/Card";
import "./featured.scss";

import debounce from 'lodash.debounce';

//import Swiper slider
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Mousewheel, Navigation, EffectFade } from "swiper";

//import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// 1. window viewport must be fixed (at least the height)
// 2. scroll fires lots of event at a time
//    a. throttle
//      a state var that store the time first scroll event fires
//      useEffect(scroll) we check now - this time > .5s


export default function Featured() {
  const [current, setCurrent] = useState(0);
  const [featureData, setFeatureData] = useState([]);
  const [progress, setProgress] = useState(0);

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
      }
    }, 100);
    return () => clearInterval(interval);
  });

  const [winHeight, setwinHeight] = useState(window.innerHeight);
  window.addEventListener('resize', () => {
    setwinHeight(() => window.innerHeight);
  })

  const [scrollY, setScrollY] = useState(0);

  // window.addEventListener("scroll", (e) => console.log("SCROLLED::", e));
  function handleScroll(e) {


    e.preventDefault();
    if (window.pageYOffset > scrollY + 10) {
      setCurrent((prevCurrent) => {
        return prevCurrent === featureData.length - 1 ? 0 : current + 1;
      });
      setScrollY(window.pageYOffset);
      setProgress(() => 0)
      // console.log('going down')
    } else if (window.pageYOffset < scrollY - 10) {
      setCurrent((prevCurrent) => {
        return prevCurrent === featureData.length - 1 ? 0 : current + 1;
      });
      setScrollY(window.pageYOffset);
      setProgress(() => 0)
      // setCurrent(current === featureData.length - 1 ? 0 : current - 1)
      // console.log('going up')
    }
    //return setScrollY(window.pageYOffset);
  }

  const debouncedChangeHandler = useMemo(
    () => debounce(handleScroll, 5000)
    , []);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll, debouncedChangeHandler);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll, debouncedChangeHandler);
    };
  });

  // const getUrl = () => {
  //   return "https://player.vimeo.com" + featureData[current]?.uri.replace("/videos/", "/video/");
  // };
  return (
    <section id="featured">
      {/* <Swiper
        direction={"vertical"}
        slidesPerView={1}
        // spaceBetween={30}
        mousewheel={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   waitForTransition: true,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        modules={[Navigation, EffectFade]}
        navigation={true}
        className="mySwiper"
      > */}
      {featureData.map((video, index) => {
        let url = "https://player.vimeo.com" + video.uri.replace("/videos/", "/video/");
        return (
          <div key={index} className={`featured-item ${index === current ? "active" : ""}`}>
            {/* <SwiperSlide key={index}> */}
            <ReactPlayer
              width="100vw"
              height={winHeight + "px"}
              url={url}
              config={{
                playerOptions: {
                  background: true,
                  quality: "720p",
                  dnt: true,
                  loop: true,
                  playsInline: true,
                  height: window.innerHeight + "px"
                },
              }}
            />
            {/* </SwiperSlide> */}
          </div>
        );
      })}
      {/* </Swiper> */}
      {featureData.map((card, index) => {
        return (
          <Card title={card.name} active={index === current} key={index} progress={progress} />
        );
      })}
    </section>
  );
}
