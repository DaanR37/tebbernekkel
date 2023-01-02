import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Animatedpage from '../Animatedpage';
import HeaderTransparent from '../Headertransparent/HeaderTransparent';
import "./featured.scss";

export default function Featured() {
    const videoIndex = ["two", "one", "three", "four", "six", "five", "eight", "seven", "nine"];
    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3001/featured")
            fetch("https://api.tebbernekkel.nl/featured")
            .then(response => response.json())
            .then(portfolioData => {
                setPortfolioData(portfolioData)
            }
            ).catch(error => {
                console.log(error.message)
            }
            )
    }, []);
    return (
        <Animatedpage>
            <section id="featured-container">
                <div className="header-transparent-featured">
                    <HeaderTransparent />
                </div>
                <div id="grid-wrapper-featured">
                    {portfolioData.map((video, index) => {
                        return (
                            <div className={videoIndex[index]} key={index}>
                                <Link
                                    to="/embeddedplayerfeatured"
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
                                        <div className="ho-featured">
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
