import "./fictionmariabodil.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Animatedpage from "../../Animatedpage";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";
import { localPhotoFolders } from "./Localphotofolders/localPhotoFolders";

export default function FictionMariaBodil() {
  const [portfolioDataFictionMariaBodil, setPortfolioDataFictionMariaBodil] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const videoIndexFictionMariaBodil = [
    "one-mariabodil", "two-mariabodil",
    "three-mariabodil", "four-mariabodil",
    "five-mariabodil",
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

          {/* Video Section */}
          {portfolioDataFictionMariaBodil.map((video, index) => {
            const currentIndex = videoIndexFictionMariaBodil[index];
            const isGlenFidich = currentIndex === "four-mariabodil";
            const isPorsche = currentIndex === "three-mariabodil";

            return (
              <div className={currentIndex} key={index}>

                {/* TasteTheFuture video */}
                {isGlenFidich ? (
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
                ) : isPorsche ? (
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
                        <Link to="/mariabodilstillsporsche">Stills</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Other videos */
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
                to={`/mariabodil/${folder.id}`}
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
      </section >
    </Animatedpage >
  )
}

