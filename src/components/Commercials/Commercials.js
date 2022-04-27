import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Animatedpage from '../Animatedpage';
import "./commercials.scss";

export default function Commercials() {
    const videoIndex = ["two", "one", "three", "four", "eleven", "six", "eight", "seven", "nine", "ten", "five", "twelve"];

    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        // fetch("http://www.localhost:3001/commercials")
        // fetch("https://tebbernekkel.nl.mycube.dev/commercials")
        fetch("https://tebbernekkel.nl/commercials")
            .then(response => response.json())
            .then(portfolioData => {
                setPortfolioData(portfolioData)
                // console.log(portfolioData);
            }).catch(error => {
                // console.log(error.message)
            })
    }, []);

    return (
        <Animatedpage>
            <section id="commercial-container">
                <div id="grid-wrapper">
                    {portfolioData.map((video, index) => {
                        return (
                            <div className={videoIndex[index]} key={index}>
                                <Link
                                    to="/embeddedplayer"
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
                                        <div className="hover-overlay">
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
