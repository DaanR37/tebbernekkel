import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Animatedpage from '../Animatedpage';
import HeaderTransparent from '../Headertransparent/HeaderTransparent';
import "./formats.scss";
import SliderFeatured from '../Sliderfeatured/SliderFeatured';
import SliderFeaturedMobile from '../Sliderfeaturedmobile/SliderFeaturedMobile';
import { useMediaQuery } from "@mui/material";

export default function Formats() {
  const videoIndexFormats = ["one-formats", "two-formats", "three-formats", "four-formats", "five-formats",
    "six-formats", "seven-formats", "eight-formats", "nine-formats", "ten-formats", "eleven-formats", "twelve-formats", "thirteen-formats",
    "fourteen-formats", "fifteen-formats", "sixteen-formats", "seventeen-formats", "eighteen-formats", "nineteen-formats", "twenty-formats"];
  const [portfolioDataFormats, setPortfolioDataFormats] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    // fetch("http://localhost:3001/formats")
    fetch("https://api.tebbernekkel.nl/formats")
      .then(response => response.json())
      .then(portfolioDataFormats => {
        setPortfolioDataFormats(portfolioDataFormats)
      }
      ).catch(error => {
        console.log(error.message)
      }
      )
  }, []);

  return (
    <Animatedpage>
      <section>
        <>
          <HeaderTransparent />
        </>
        {isSmallScreen ? (
          <SliderFeaturedMobile />
        ) : (
          <SliderFeatured />
        )}
        <div id="grid-wrapper-formats" className='grid-wrapper'>
          {portfolioDataFormats.map((video, index) => {
            return (
              <div className={videoIndexFormats[index]} key={index}>
                <Link
                  to="/embeddedplayerformats"
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
