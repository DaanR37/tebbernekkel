import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import "./fictionmariabodil.scss";
import PicsMariaBodil from "./PicsMariaBodil";


export default function FictionMariaBodil() {

    const videoIndexFictionMariaBodil = ["one-mariabodil", "two-mariabodil"];

    const [portfolioDataFictionMariaBodil, setPortfolioDataFictionMariaBodil] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3001/fictionmariabodil")
        fetch("https://api.tebbernekkel.nl/fictionmariabodil")
            .then(response => response.json())
            .then(portfolioDataFictionMariaBodil => {
                setPortfolioDataFictionMariaBodil(portfolioDataFictionMariaBodil)
            }).catch(error => {
                console.log(error.message)
            })
    }, []);

    return (
        <section id="fiction-container-mariabodil">
            <div className="header-transparent-fiction">
                <HeaderTransparent />
            </div>
            <div className="slider-nav">
                <SliderCreatives />
            </div>
            <div id="grid-wrapper-fiction-mariabodil">
                {portfolioDataFictionMariaBodil.map((video, index) => {
                    return (
                        <div className={videoIndexFictionMariaBodil[index]} key={index}>
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
                                        height: "100%",
                                        width: "100%"
                                    }}>
                                    <div id="ho-mariabodil">
                                        <span aria-hidden="true">{video.name}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <PicsMariaBodil />
        </section>
    )
}

