import "./fictionarjen.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

export default function FictionArjen() {
  const videoIndexFictionArjen = [
    "one-arjen",
    "two-arjen",
    "three-arjen",
    "four-arjen",
    "five-arjen",
    "six-arjen",
    "seven-arjen",
    "eight-arjen",
  ];
  const [portfolioDataFictionArjen, setPortfolioDataFictionArjen] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    fetch("https://api.tebbernekkel.nl/fictionarjen")
      // fetch("http://localhost:3001/fictionarjen")
      .then((response) => response.json())
      .then((portfolioDataFictionArjen) => {
        setPortfolioDataFictionArjen(portfolioDataFictionArjen);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <Animatedpage>
      <section>
        <>
          <HeaderTransparent />
        </>

        {isSmallScreen ? <SliderMobile /> : <SliderCreatives />}
        <div id="grid-wrapper-fiction-arjen" className='grid-wrapper'>
          {portfolioDataFictionArjen.map((video, index) => {
            return (
              <div className={videoIndexFictionArjen[index]} key={index}>
                <Link
                  to="/embeddedplayerarjen"
                  state={{
                    link: `${video.uri}`,
                    title: `${video.name}`,
                    description: `${video.description}`,
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${video.pictures.sizes[5].link})`,
                      height: "100%",
                      width: "100%"
                    }}>
                    <div className="hover-thumbnails">
                      <span aria-hidden="true">{video.name}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </Animatedpage>
  );
}
