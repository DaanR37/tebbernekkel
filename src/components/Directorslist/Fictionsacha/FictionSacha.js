import "./fictionsacha.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

export default function FictionSacha() {
  const videoIndexFictionSacha = ["one-sacha", "two-sacha", "three-sacha"];
  const [portfolioDataFictionSacha, setPortfolioDataFictionSacha] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    console.log("fetching data")
    // fetch("http://localhost:3001/fictionsacha")
    fetch("https://api.tebbernekkel.nl/fictionsacha")
      .then(response => response.json())
      .then(portfolioDataFictionSacha => {
        setPortfolioDataFictionSacha(portfolioDataFictionSacha)
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
        <div id="grid-wrapper-fiction-sacha" className='grid-wrapper'>
          {portfolioDataFictionSacha.map((video, index) => {
            return (
              <div className={videoIndexFictionSacha[index]} key={index}>
                <Link
                  to="/embeddedplayersacha"
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
