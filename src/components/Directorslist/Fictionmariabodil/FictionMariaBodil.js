import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Animatedpage from "../../Animatedpage";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import "./fictionmariabodil.scss";
import PicsMariaBodil from "./PicsMariaBodil";
import SliderMobile from "../../Slidermobile/SliderMobile";


export default function FictionMariaBodil() {
    const [portfolioDataFictionMariaBodil, setPortfolioDataFictionMariaBodil] = useState([]);
    const videoIndexFictionMariaBodil = ["one-mariabodil", "two-mariabodil", "three-mariabodil"];

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
    }, [portfolioDataFictionMariaBodil]);

    return (
        <Animatedpage>
            <section>
                <>
                    <HeaderTransparent />
                </>
                <>
                    <SliderCreatives />
                </>
                <>
                    <SliderMobile />
                </>
                <div id="grid-wrapper-fiction-mariabodil" className='grid-wrapper'>
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
                                        <div className="hover-thumbnails">
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
        </Animatedpage>
    )
}
