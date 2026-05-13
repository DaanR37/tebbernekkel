import "./homepage.scss";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import ReactPlayer from "react-player/vimeo";
import { Box } from "@mui/material";
import classNames from "classnames";
import { throttle } from "lodash";

import Card from "./Cards/Card";
import SlideNavigation from "./SlideNavigation";

import Animatedpage from "../Animatedpage";
import HeaderTransparent from "../Headertransparent/HeaderTransparent";


export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [featureData, setFeatureData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [winHeight, setwinHeight] = useState(window.innerHeight);
  const [mountedSlides, setMountedSlides] = useState(() => new Set([0]));
  const [readySlides, setReadySlides] = useState(() => new Set());
  const containerRef = useRef();

  //FETCHING DATA
  useEffect(() => {
    fetch("https://api.tebbernekkel.nl/homepage")
      .then((response) => response.json())
      .then((featureData) => {
        setFeatureData(featureData)
      })
      .catch((error) => {
        console.log(error.message)
      });
    const resizeHeight = () => {
      setwinHeight(() => window.innerHeight)
    };
    window.addEventListener("resize", resizeHeight);
    document.body.classList.add("slide-page");
    return () => {
      document.body.classList.remove("slide-page");
      window.removeEventListener("resize", resizeHeight);
    };
  }, []);

  // Phase B: zodra een slide klaar is om te spelen, mount alvast de volgende.
  // Dit zorgt dat slide 0 eerst exclusieve bandwidth krijgt, en pas wanneer
  // hij echt draait wordt slide 1 in de achtergrond geladen.
  const handleReady = useCallback((index) => {
    setReadySlides((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
    setMountedSlides((prev) => {
      if (featureData.length === 0) return prev;
      const nextIndex = (index + 1) % featureData.length;
      if (prev.has(nextIndex)) return prev;
      const next = new Set(prev);
      next.add(nextIndex);
      return next;
    });
  }, [featureData.length]);

  // Phase C: 2 seconden nadat slide 0 ready is, mount alle overige slides
  // in de achtergrond. Tegen de tijd dat auto-advance ze nodig heeft (10s+)
  // zijn ze al gebufferd.
  useEffect(() => {
    if (!readySlides.has(0) || featureData.length === 0) return;
    const timer = setTimeout(() => {
      setMountedSlides((prev) => {
        const next = new Set(prev);
        for (let i = 0; i < featureData.length; i++) next.add(i);
        return next;
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [readySlides, featureData.length]);

  // Safety net: als de gebruiker handmatig sneller scrollt dan progressive
  // mount bijhoudt, zorg dat de actieve slide in elk geval gemount is.
  useEffect(() => {
    if (featureData.length === 0) return;
    setMountedSlides((prev) => {
      if (prev.has(current)) return prev;
      const next = new Set(prev);
      next.add(current);
      return next;
    });
  }, [current, featureData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => (oldProgress + 1) % 100);
      if ((progress + 1) % 100 === 0) {
        setCurrent((prevCurrent) => {
          return prevCurrent === featureData.length - 1 ? 0 : current + 1;
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);

  const moveNextSlide = (current, isUpDirection) => {
    if (!featureData.length) return;
    const newActive =
      (featureData.length + (isUpDirection ? current + 1 : current - 1)) %
      featureData.length;

    setCurrent(newActive);
    setProgress(0);
  };
  const throttledUpdate = useMemo(
    () =>
      throttle(moveNextSlide, 1.3 * 1000, { trailing: false, leading: true }),
    [featureData.length]
  );

  const onScroll = (e) => {
    const isUp = e.deltaY > 0;
    throttledUpdate(current, isUp);
  };

  useEffect(() => {
    let startPos,
      endPos = 0;

    const startTouch = (e) => {
      startPos = e.touches[0].clientY;
    };
    const endTouch = (e) => {
      console.log(e);
      endPos = e.changedTouches[0].clientY;
      const isUp = endPos - startPos < 0;
      moveNextSlide(current, isUp);
      e.preventDefault();
      e.stopPropagation();
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("touchstart", startTouch);
      containerRef.current.addEventListener("touchend", endTouch);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("touchstart", startTouch);
        containerRef.current.removeEventListener("touchend", endTouch);
      }
    };
  }, [featureData.length, current]);

  const showLoader = featureData.length === 0 || !readySlides.has(current);

  return (
    <Animatedpage>
      <section role="presentation" className="slide-container" id="featured">
        <>
          <HeaderTransparent />
        </>
        <div
          className={classNames("slide-loader", {
            "slide-loader--hidden": !showLoader,
          })}
        >
          <img src="images/BBKK-pink.png" alt="" />
        </div>
        <div
          ref={containerRef}
          onWheel={onScroll}
          className="slide-container__listener"
        ></div>
        {featureData.map((video, index) => {
          const url = `https://player.vimeo.com${video.uri.replace(
            "/videos/",
            "/video/"
          )}`;
          const height = `${winHeight}px`;
          const isMounted = mountedSlides.has(index);
          return (
            <div
              key={index}
              className={`slide-item featured-item ${index === current ? "active" : ""
                }`}
            >
              <div className="slide-item__inner">
                <div
                  className={classNames("slide-item__video", {
                    "slide-item__video--active": index === current,
                    "slide-item__video--inactive": index !== current,
                  })}
                >
                  {isMounted && (
                    <ReactPlayer
                      width="100vw"
                      height={height}
                      url={url}
                      playing={index === current}
                      muted
                      playsinline
                      onReady={() => handleReady(index)}
                      config={{
                        playerOptions: {
                          background: true,
                          quality: "1080p",
                          dnt: true,
                          loop: true,
                          height: height,
                        },
                      }}
                    />
                  )}
                </div>
                <Card title={video.name} active={index === current} key={index} />
              </div>
            </div>
          );
        })}
        {featureData.length && (
          <>
            <div className="slide-progress">
              <Box
                className="slide-progress__inner"
                sx={{
                  transform: `translate3d(0px, 0px, 0px) scale(1, ${(100 - progress) / 100
                    })`,
                  transition: "transform 200ms",
                }}
              ></Box>
            </div>
            <SlideNavigation total={featureData.length} active={current} />
          </>
        )}
      </section>
    </Animatedpage>
  );
}
