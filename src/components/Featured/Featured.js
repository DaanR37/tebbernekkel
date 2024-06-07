import "./featured.scss";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Animatedpage from '../Animatedpage';
import HeaderTransparent from '../Headertransparent/HeaderTransparent';
import SliderFeatured from '../Sliderfeatured/SliderFeatured';
import SliderFeaturedMobile from '../Sliderfeaturedmobile/SliderFeaturedMobile';
import { useMediaQuery } from "@mui/material";

export default function Featured() {
  const videoIndex = ["two", "one", "three", "four", "six", "five", "eight", "seven",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three"];
  const [portfolioData, setPortfolioData] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    fetch("https://api.tebbernekkel.nl/featured")
      .then(response => response.json())
      .then(portfolioData => {
        setPortfolioData(portfolioData)
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
        <div id="grid-wrapper-featured" className='grid-wrapper'>
          {portfolioData.map((video, index) => {
            return (
              <div className={videoIndex[index]} key={index}>
                <Link
                  to="/embeddedplayerfeatured"
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