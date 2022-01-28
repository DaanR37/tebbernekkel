import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./commercials.scss";

export default function Commercials() {
    const [portfolioData, setPortfolioData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/commercials").then(response => response.json())
            .then(portfolioData => {
                setPortfolioData(portfolioData)
            }).catch(error => {
                console.log(error.message)
            })
    }, []);

    return (
        <section id="commercial-container">
            {portfolioData.map((video, index) => {
                return (
                    <Link
                        key={index}
                        to={{
                            pathname: "/embeddedplayer",
                            state: {
                                link: `${video.uri}`,
                                title: `${video.name}`,
                                description: `${video.description}`,
                            }
                        }}>
                        <div id="grid-wrapper">
                            <div
                                className="one"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                            <div
                                className="two"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                            <div
                                className="three"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                            <div
                                className="four"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                            <div
                                className="five"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                            <div
                                className="six"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                            <div
                                className="seven"
                                style={{
                                    backgroundImage: `url(${video.pictures.sizes[5].link})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    );
}
