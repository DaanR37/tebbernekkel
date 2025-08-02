import "./fictionthomas.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

export default function FictionThomas() {
  const videoIndexFictionThomas = ["one-thomas", "two-thomas", "three-thomas", "four-thomas"];
  const [portfolioDataFictionThomas, setPortfolioDataFictionThomas] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    // fetch("http://localhost:3001/fictionthomas")
    fetch("https://api.tebbernekkel.nl/fictionthomas")
      .then(response => response.json())
      .then(portfolioDataFictionThomas => {
        setPortfolioDataFictionThomas(portfolioDataFictionThomas)
      }).catch(error => {
        console.log(error.message)
      })
  }, []);

  return (
    <Animatedpage>
      <section>
        <>
          <HeaderTransparent />
        </>
        {isSmallScreen ? (
          <SliderMobile />
        ) : (
          <SliderCreatives />
        )}
        <div id="grid-wrapper-fiction-thomas" className='grid-wrapper'>
          {portfolioDataFictionThomas.map((video, index) => {
            return (
              <div className={videoIndexFictionThomas[index]} key={index}>
                <Link
                  to="/embeddedplayerthomas"
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
                      width: "100%",
                      // backgroundSize: "cover",
                      // backgroundPosition: "center",
                      // backgroundRepeat: "no-repeat",
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
  )
}