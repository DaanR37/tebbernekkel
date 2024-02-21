import "./fictiondamien.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

export default function FictionDamien() {
  const videoIndexFictionDamien = ["one-damien", "two-damien", "three-damien", "four-damien", "five-damien", "six-damien", "seven-damien"];
  const [portfolioDataFictionDamien, setPortfolioDataFictionDamien] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    fetch("https://api.tebbernekkel.nl/fictiondamien")
      .then(response => response.json())
      .then(portfolioDataFictionDamien => {
        setPortfolioDataFictionDamien(portfolioDataFictionDamien)
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
        <div id="grid-wrapper-fiction-damien" className='grid-wrapper'>
          {portfolioDataFictionDamien.map((video, index) => {
            return (
              <div className={videoIndexFictionDamien[index]} key={index}>
                <Link
                  to="/embeddedplayerdamien"
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
