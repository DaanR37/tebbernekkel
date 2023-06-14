import { useLocation } from "react-router-dom";
import Animatedpage from "../../../Animatedpage";
import "./embeddedplayershay.scss";

export default function EmbeddedPlayerShay() {
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
            <section id="embedded-player-shay">
                <div className="embedded-container-dekstop-shay">
                    <a href="/fictionshay">
                        <div className="times-shay">
                            <img src="images/times-circle-regular-copy.svg" alt="times" />
                        </div>
                    </a>
                    <div className="embedded-player-shay">
                        <iframe
                            title={url}
                            src={url}
                            responsive="true"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <div className="player-text-shay">
                            <p>{title}</p>
                            <br></br>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className="embedded-container-mobile-shay">
                    <div className="embedded-player-shay">
                        <a href="/fictionshay">
                            <div className="times-shay">
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
                        <div className="player-text-shay">
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
