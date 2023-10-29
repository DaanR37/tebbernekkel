import "./fictionblue.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTransparent from "../../Headertransparent/HeaderTransparent";
import Animatedpage from "../../Animatedpage";
import SliderCreatives from "../../Slidercreatives/SliderCreatives";
import SliderMobile from "../../Slidermobile/SliderMobile";

export default function FictionBlue() {
    const videoIndexFictionBlue = ["seven-blue", "three-blue", "four-blue", "five-blue", "six-blue", "two-blue", "one-blue", "eight-blue", "nine-blue", "ten-blue", "eleven-blue", "twelve-blue"];

    const [portfolioDataFictionBlue, setPortfolioDataFictionBlue] = useState([]);
    useEffect(() => {
        // fetch("http://localhost:3001/fictionblue")
        fetch("https://api.tebbernekkel.nl/fictionblue")
            .then(response => response.json())
            .then(portfolioDataFictionBlue => {
                setPortfolioDataFictionBlue(portfolioDataFictionBlue)
            }).catch(error => {
                console.log(error.message)
            })
    }, []);

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
                <div id="grid-wrapper-fiction-blue" className='grid-wrapper'>
                    {portfolioDataFictionBlue.map((video, index) => {
                        return (
                            <div className={videoIndexFictionBlue[index]} key={index}>
                                <Link
                                    to="/embeddedplayerblue"
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
