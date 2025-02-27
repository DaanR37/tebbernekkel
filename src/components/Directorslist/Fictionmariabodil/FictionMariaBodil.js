import "./fictionmariabodil.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Animatedpage from "../../Animatedpage";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";
import { localPhotoFolders } from "./Localphotofolders/localPhotoFolders";
// import PicsMariaBodil from "./PicsMariaBodil";

export default function FictionMariaBodil() {
  const [portfolioDataFictionMariaBodil, setPortfolioDataFictionMariaBodil] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const videoIndexFictionMariaBodil = [
    "one-mariabodil", "two-mariabodil",
    "three-mariabodil", "four-mariabodil"
  ];
  const photoIndexFictionMariaBodil = [
    "one-thumbnail", "two-thumbnail",
    "three-thumbnail", "four-thumbnail",
    "five-thumbnail", "six-thumbnail",
    "seven-thumbnail", "eight-thumbnail",
    "nine-thumbnail", "ten-thumbnail"
  ];


  useEffect(() => {
    // fetch("http://localhost:3001/fictionmariabodil")
    fetch("https://api.tebbernekkel.nl/fictionmariabodil")
      .then(response => response.json())
      .then(portfolioDataFictionMariaBodil => {
        setPortfolioDataFictionMariaBodil(portfolioDataFictionMariaBodil)
        console.log(portfolioDataFictionMariaBodil);
      }).catch(error => {
        console.log(error.message)
      })
  }, []);

  return (
    <Animatedpage>
      <section>
        <HeaderTransparent />
        {isSmallScreen ? <SliderMobile /> : <SliderCreatives />}
        <div id="grid-wrapper-fiction-mariabodil" className='grid-wrapper'>
          {portfolioDataFictionMariaBodil.map((video, index) => {
            const isSpecial = videoIndexFictionMariaBodil[index] === "three-mariabodil";
            return (
              <div className={videoIndexFictionMariaBodil[index]} key={index}>
                {isSpecial ? (
                  <div
                    style={{
                      backgroundImage: `url(${video.pictures.sizes[5].link})`,
                      position: "relative",
                      height: "100%",
                      width: "100%"
                    }}
                  >
                    <div className="hover-thumbnails">
                      <span aria-hidden="true">{video.name}</span>
                      <div className="hover-options">
                        <Link
                          to="/embeddedplayermariabodil"
                          state={{
                            link: video.uri,
                            title: video.name,
                            description: video.description,
                          }}
                        >
                          Video
                        </Link>
                        <Link to="/mariabodilstills">Stills</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/embeddedplayermariabodil"
                    state={{
                      link: `${video.uri}`,
                      title: `${video.name}`,
                      description: `${video.description}`,
                    }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${video.pictures.sizes[5].link})`,
                        position: "relative",
                        height: "100%",
                        width: "100%"
                      }}>
                      <div className="hover-thumbnails">
                        <span aria-hidden="true">{video.name}</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}

          {/* Render lokale foto's */}
          {localPhotoFolders.map((folder, index) => (
            <div className={photoIndexFictionMariaBodil[index]} key={folder.id}>
              <Link
              // to={folder.route}
              // to={`/mariabodil/${folder.id}`}
              >
                <div
                  style={{
                    backgroundImage: `url(${folder.thumbnail})`,
                    position: "relative",
                    height: "100%",
                    width: "100%"
                  }}
                >
                  <div className="hover-thumbnails">
                    <span aria-hidden="true">{folder.title}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* <PicsMariaBodil /> */}
      </section >
    </Animatedpage >
  )
}

