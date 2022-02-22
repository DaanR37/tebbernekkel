import { useState, useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player/vimeo";
import { Box, CircularProgress } from "@mui/material";

import Card from "./Cards/Card";
import classNames from "classnames";
import { throttle } from "lodash";

import "./featured.scss";

export default function Featured() {
  const [current, setCurrent] = useState(0);
  const [featureData, setFeatureData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [winHeight, setwinHeight] = useState(window.innerHeight);
  const containerRef = useRef();
  //FETCHING DATA
  useEffect(() => {
    fetch("http://192.168.1.113:3001/featured")
      .then((response) => response.json())
      .then((featureData) => {
        setFeatureData(featureData);
      })
      .catch((error) => {
        console.log(error.message);
      });
    const resizeHeight = () => {
      setwinHeight(() => window.innerHeight);
    };
    window.addEventListener("resize", resizeHeight);
    return () => {
      window.removeEventListener("resize", resizeHeight);
    };
  }, []);

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
    () => throttle(moveNextSlide, 2 * 1000, { trailing: false, leading: true }),
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

  return (
    <section role="presentation" className="slide-container" id="featured">
      <div
        ref={containerRef}
        onWheel={onScroll}
        className="slide-container__listener"
      ></div>
      {!featureData.length && (
        <CircularProgress
          sx={{
            top: "50%",
            left: "50%",
            zIndex: 90,
          }}
        />
      )}
      {featureData.map((video, index) => {
        const url = `https://player.vimeo.com${video.uri.replace(
          "/videos/",
          "/video/"
        )}`;
        const height = `${winHeight}px`;
        return (
          <div
            key={index}
            onWheel={onScroll}
            className={`slide-item featured-item ${
              index === current ? "active" : ""
            }`}
          >
            <div className="slide-item__inner">
              <div
                className={classNames("slide-item__video", {
                  "slide-item__video--active": index === current,
                  "slide-item__video--inactive": index !== current,
                })}
              >
                <ReactPlayer
                  width="100vw"
                  height={height}
                  url={url}
                  playing={index === current}
                  muted
                  playsinline
                  config={{
                    playerOptions: {
                      background: true,
                      quality: "720p",
                      dnt: true,
                      loop: true,
                      height: height,
                    },
                  }}
                />
              </div>
              <Card title={video.name} active={index === current} key={index} />
            </div>
          </div>
        );
      })}
      <div className="slide-progress">
        <Box
          className="slide-progress__inner"
          sx={{
            transform: `translate3d(0px, 0px, 0px) scale(1, ${
              (100 - progress) / 100
            })`,
            transition: "transform 200ms",
          }}
        ></Box>
      </div>
      {/* {featureData.length && (
        <CircularProgress
          variant="determinate"
          value={progress}
          size={30}
          thickness={3}
        />
      )} */}
    </section>
  );
}





// import { useState, useEffect, useMemo } from "react";
// import ReactPlayer from "react-player/vimeo";
// import Card from "./Cards/Card";
// import "./featured.scss";

// import debounce from 'lodash.debounce';


// export default function Featured() {
//   const [current, setCurrent] = useState(0);
//   const [featureData, setFeatureData] = useState([]);
//   const [progress, setProgress] = useState(0);

  //FETCHING DATA
//   useEffect(() => {
//     fetch("http://localhost:3001/featured")
//       .then((response) => response.json())
//       .then((featureData) => {
//         setFeatureData(featureData);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }, []);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((oldProgress) => oldProgress + 1);
//       if ((progress + 1) % 100 === 0) {
//         setCurrent((prevCurrent) => {
//           return prevCurrent === featureData.length - 1 ? 0 : current + 1;
//         });
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   });

//   const [winHeight, setwinHeight] = useState(window.innerHeight);
//   window.addEventListener('resize', () => {
//     setwinHeight(() => window.innerHeight);
//   })

//   const [scrollY, setScrollY] = useState(0);

//   function handleScroll(e) {


//     e.preventDefault();
//     if (window.pageYOffset > scrollY + 10) {
//       setCurrent((prevCurrent) => {
//         return prevCurrent === featureData.length - 1 ? 0 : current + 1;
//       });
//       setScrollY(window.pageYOffset);
//       setProgress(() => 0)
//     } else if (window.pageYOffset < scrollY - 10) {
//       setCurrent((prevCurrent) => {
//         return prevCurrent === featureData.length - 1 ? 0 : current + 1;
//       });
//       setScrollY(window.pageYOffset);
//       setProgress(() => 0)
     
//     }
//   }

//   const debouncedChangeHandler = useMemo(
//     () => debounce(handleScroll, 5000)
//     , []);

//   useEffect(() => {
//     function watchScroll() {
//       window.addEventListener("scroll", handleScroll, debouncedChangeHandler);
//     }
//     watchScroll();
//     return () => {
//       window.removeEventListener("scroll", handleScroll, debouncedChangeHandler);
//     };
//   });

//   return (
//     <section id="featured">
//       {featureData.map((video, index) => {
//         let url = "https://player.vimeo.com" + video.uri.replace("/videos/", "/video/");
//         return (
//           <div key={index} className={`featured-item ${index === current ? "active" : ""}`}>
//             <ReactPlayer
//               width="100vw"
//               height={winHeight + "px"}
//               url={url}
//               config={{
//                 playerOptions: {
//                   background: true,
//                   quality: "720p",
//                   dnt: true,
//                   loop: true,
//                   playsInline: true,
//                   height: window.innerHeight + "px"
//                 },
//               }}
//             />
//           </div>
//         );
//       })}
//       {featureData.map((card, index) => {
//         return (
//           <Card title={card.name} active={index === current} key={index} progress={progress} />
//         );
//       })}
//     </section>
//   );
// }
