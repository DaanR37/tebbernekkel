import { useLocation } from "react-router-dom";
import Animatedpage from "../../../Animatedpage";

export default function EmbeddedPlayerSacha() {
  const location = useLocation();
  console.log(location.state);

  let url = `https://player.vimeo.com${location.state.link}`;
  url = url.replace("/videos/", "/video/");
  let description = location.state.description;
  if (description === "null") {
    description = "";
  }

  return (
    <Animatedpage>
      <section id="embedded-player-sacha" className="embedded_player">
        <div>
          <a href="/fictionsacha">
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
          </div>
        </div>
      </section>
    </Animatedpage>
  );
}
