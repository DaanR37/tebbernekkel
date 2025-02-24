import { useLocation } from "react-router-dom";
import Animatedpage from "../../../Animatedpage";
import { useNavigate } from "react-router-dom";

export default function EmbeddedPlayerSimon() {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.state);

  let url = `https://player.vimeo.com${location.state.link}`;
  url = url.replace("/videos/", "/video/");
  // const title = location.state.title;
  let description = location.state.description;
  if (description === "null") {
    description = "";
  }

  const handleClose = () => {
    navigate("/fictionsimon")
  };

  return (
    <Animatedpage>
      <section id="embedded-player-simon" className="embedded_player">
        {/* <div> */}

        <div className="times" onClick={handleClose}>
          <img src="images/times-circle-regular-copy.svg" alt="times" />
        </div>

        <div className="embedded-player">
          <iframe
            title={url}
            src={url}
            responsive="true"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        
        {/* </div> */}
      </section>
    </Animatedpage>
  )
}
