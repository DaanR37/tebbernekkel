import "./fictionachmed.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";


export default function FictionAchmed() {
    const videoIndexFictionAchmed = ["seven-achmed", "three-achmed", "four-achmed", "five-achmed", "six-achmed", "two-achmed", "one-achmed"];

    const [portfolioDataFictionAchmed, setPortfolioDataFictionAchmed] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3001/fictionachmed")
        fetch("https://api.tebbernekkel.nl/fictionachmed")
            .then(response => response.json())
            .then(portfolioDataFictionAchmed => {
                setPortfolioDataFictionAchmed(portfolioDataFictionAchmed)
            }).catch(error => {
                console.log(error.message)
            })
    }, []);

    return (
        <Animatedpage>
            <section id="fiction-container-achmed">
                <>
                    <HeaderTransparent />
                </>
                <>
                    <SliderCreatives />
                </>
                <>
                    <SliderMobile />
                </>
                <div id="grid-wrapper-fiction-achmed">
                    {portfolioDataFictionAchmed.map((video, index) => {
                        return (
                            <div className={videoIndexFictionAchmed[index]} key={index}>
                                <Link
                                    to="/embeddedplayerachmed"
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
                                        <div id="ho-achmed">
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
