import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./fiction.scss";

export default function Fiction() {
  const videoIndexFiction = ["seven-f", "six-f", "three-f", "four-f", "five-f", "two-f", "one-f"];

  const [portfolioDataFiction, setPortfolioDataFiction] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/fiction").then(response => response.json())
      .then(portfolioDataFiction => {
        setPortfolioDataFiction(portfolioDataFiction)
        // console.log(portfolioData);
      }).catch(error => {
        console.log(error.message)
      })
  }, []);

  return (
    <section id="fiction-container">
      <div id="grid-wrapper-fiction">
        {portfolioDataFiction.map((video, index) => {
          return (
            <div className={videoIndexFiction[index]} key={index}>
              <Link
                to="/embeddedplayerfiction"
                state={{
                  link: `${video.uri}`,
                  title: `${video.name}`,
                  description: `${video.description}`,
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                    // backgroundSize: "cover", /// "cover" initially
                    // backgroundRepeat: 'no-repeat',
                    // backgroundPosition: "center",
                    height: "100%",
                    width: "100%"
                  }}>
                  <div id="ho-f">
                    <span aria-hidden="true">{video.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  );
}