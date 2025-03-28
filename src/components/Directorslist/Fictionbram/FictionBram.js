import "./fictionbram.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

export default function FictionBram() {
  const videoIndexFictionBram = ["one-bram", "two-bram", "three-bram", "four-bram"];
  const [portfolioDataFictionBram, setPortfolioDataFictionBram] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    // fetch("http://localhost:3001/fictionbram")
    fetch("https://api.tebbernekkel.nl/fictionbram")
      .then(response => response.json())
      .then(portfolioDataFictionBram => {
        setPortfolioDataFictionBram(portfolioDataFictionBram)
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
        <div id="grid-wrapper-fiction-bram" className='grid-wrapper'>
          {portfolioDataFictionBram.map((video, index) => {
            return (
              <div className={videoIndexFictionBram[index]} key={index}>
                <Link
                  to="/embeddedplayerbram"
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
  )

}
