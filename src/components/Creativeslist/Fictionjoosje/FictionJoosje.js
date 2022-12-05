import "./fictionjoosje.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";

export default function FictionJoosje() {
    const videoIndexFictionJoosje = ["three-joosje", "four-joosje", "five-joosje", "two-joosje", "one-joosje"];

    const [portfolioDataFictionJoosje, setPortfolioDataFictionJoosje] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3001/fictionjoosje")
        fetch("https://api.tebbernekkel.nl/fictionjoosje")
            .then(response => response.json())
            .then(portfolioDataFictionJoosje => {
                setPortfolioDataFictionJoosje(portfolioDataFictionJoosje)
            }).catch(error => {
                console.log(error.message)
            })
    }, []);

    return (
        <Animatedpage>
            <section id="fiction-container-joosje">
                <div className="header-transparent-fiction">
                    <HeaderTransparent />
                </div>
                <div className="slider-nav">
                    <SliderCreatives />
                </div>
                <div id="grid-wrapper-fiction-joosje">
                    {portfolioDataFictionJoosje.map((video, index) => {
                        return (
                            <div className={videoIndexFictionJoosje[index]} key={index}>
                                <Link
                                    to="/embeddedplayerjoosje"
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
                                        <div id="ho-joosje">
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
