import "./fictionmoremagenta.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";
import { useMediaQuery } from "@mui/material";

const MOREMAGENTA_VIMEO_URLS = [
  // Row 1
  "https://vimeo.com/873694852",                    // La Cubanita
  "https://vimeo.com/826218027",                    // Blue // Samsung
  // Row 2
  "https://vimeo.com/757995083",                    // Blue // Yubo
  "https://vimeo.com/592755510",                    // SENNHEISER
  "https://vimeo.com/757995039",                    // Blue // ING
  // Row 3
  "https://vimeo.com/tebbernekkel/undiemeister",    // Blue // Undiemeister
  "https://vimeo.com/1190097550",                   // Matchis_Water
  // Row 4
  "https://vimeo.com/1190097388",                   // Matchis_Vuur
];

export default function FictionMoreMagenta() {
  const videoIndexFictionMoreMagenta = [
    "one-moremagenta",
    "two-moremagenta",
    "three-moremagenta",
    "four-moremagenta",
    "five-moremagenta",
    "six-moremagenta",
    "seven-moremagenta",
    "eight-moremagenta",
  ];
  const [portfolioDataFictionMoreMagenta, setPortfolioDataFictionMoreMagenta] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    Promise.all(
      MOREMAGENTA_VIMEO_URLS.map((url) =>
        fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}&width=1920`)
          .then((r) => r.json())
          .then((data) => ({
            uri: `/videos/${data.video_id}`,
            name: data.title,
            description: data.description || "",
            pictures: {
              sizes: [
                {}, {}, {}, {}, {},
                { link: data.thumbnail_url },
              ],
            },
          }))
          .catch(() => null)
      )
    ).then((results) => {
      setPortfolioDataFictionMoreMagenta(results.filter(Boolean));
    });
  }, []);

  return (
    <Animatedpage>
      <section>
        <>
          <HeaderTransparent />
        </>
        {isSmallScreen ? <SliderMobile /> : <SliderCreatives />}
        <div id="grid-wrapper-fiction-moremagenta" className="grid-wrapper">
          {portfolioDataFictionMoreMagenta.map((video, index) => {
            return (
              <div className={videoIndexFictionMoreMagenta[index]} key={index}>
                <Link
                  to="/embeddedplayermoremagenta"
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
                    }}
                  >
                    <div className="hover-thumbnails">
                      <span aria-hidden="true">{video.name}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Animatedpage>
  );
}
