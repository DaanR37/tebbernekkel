import { useLocation } from "react-router-dom";
import Animatedpage from "../../../Animatedpage";
import "./embeddedplayerblue.scss";

export default function EmbeddedPlayerBlue() {
    const location = useLocation();
    console.log(location.state);

    let url = `https://player.vimeo.com${location.state.link}`;
    url = url.replace("/videos/", "/video/");
    const title = location.state.title;
    let description = location.state.description;
    if (description === "null") {
        description = "";
    }

    return (
        <Animatedpage>
            <section id="embedded-player-blue">

                <div className="embedded-container-dekstop-blue">
                    <a href="/fictionblue">
                        <div className="times-blue">
                            <img src="images/times-circle-regular-copy.svg" alt="times" />
                        </div>
                    </a>
                    <div className="embedded-player-blue">
                        <iframe
                            title={url}
                            src={url}
                            responsive="true"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <div className="player-text-blue">
                            <p>{title}</p>
                            <br></br>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className="embedded-container-mobile-blue">
                    <div className="embedded-player-blue">
                        <a href="/fictionblue">
                            <div className="times-blue">
                                <img src="images/times-circle-outline-mobile.svg" alt="times" />
                            </div>
                        </a>
                        <iframe
                            title={url}
                            src={url}
                            responsive="true"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <div className="player-text-blue">
                            <p>{title}</p>
                            <br></br>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </Animatedpage>
    )
}