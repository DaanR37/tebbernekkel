import "./fictionsimon.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

export default function FictionSimon() {
  const videoIndexFictionSimon = ["one-simon", "two-simon", "three-simon", "four-simon", "five-simon"];
  const [portfolioDataFictionSimon, setPortfolioDataFictionSimon] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/fictionsimon`)
      .then(response => response.json())
      .then(portfolioDataFictionSimon => {
        setPortfolioDataFictionSimon(portfolioDataFictionSimon)
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
        <div id="grid-wrapper-fiction-simon" className='grid-wrapper'>
          {portfolioDataFictionSimon.map((video, index) => {
            return (
              <div className={videoIndexFictionSimon[index]} key={index}>
                <Link
                  to="/embeddedplayersimon"
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
