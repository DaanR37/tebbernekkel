import "./fictionfolkert.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";

export default function FictionFolkert() {
    const videoIndexFictionFolkert = ["seven-folkert", "three-folkert", "four-folkert", "five-folkert", "six-folkert", "two-folkert", "one-folkert", "eight-folkert", "nine-folkert", "ten-folkert"];

    const [portfolioDataFictionFolkert, setPortfolioDataFictionFolkert] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3001/fictionfolkert")
        fetch("https://api.tebbernekkel.nl/fictionfolkert")
            .then(response => response.json())
            .then(portfolioDataFictionFolkert => {
                setPortfolioDataFictionFolkert(portfolioDataFictionFolkert)
            }).catch(error => {
                console.log(error.message)
            })
    }, []);

    return (
        <Animatedpage>
            <section id="fiction-container-folkert">
                <div className="header-transparent-fiction">
                    <HeaderTransparent />
                </div>
                <div className="slider-nav">
                    <SliderCreatives />
                </div>
                <div id="grid-wrapper-fiction-folkert">
                    {portfolioDataFictionFolkert.map((video, index) => {
                        return (
                            <div className={videoIndexFictionFolkert[index]} key={index}>
                                <Link
                                    to="/embeddedplayerfolkert"
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
                                        <div id="ho-folkert">
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
