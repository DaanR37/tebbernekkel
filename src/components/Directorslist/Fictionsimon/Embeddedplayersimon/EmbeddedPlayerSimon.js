import { useLocation } from "react-router-dom";
import Animatedpage from "../../../Animatedpage";

export default function EmbeddedPlayerSimon() {
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
      <section id="embedded-player-simon" className="embedded_player">
        <div>
          <a href="/fictionsimon">
            <div className="times">
              <img src="images/times-circle-regular-copy.svg" alt="times" />
            </div>
          </a>
          <div className="embedded-player">
            <iframe
              title={url}
              src={url}
              responsive="true"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="player-text">
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
