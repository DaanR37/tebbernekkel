import { useLocation } from "react-router-dom";
import "./embeddedplayerfiction.scss";

const EmbeddedPlayerFiction = () => {
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
    <section id="embedded-player-fiction">

      <a href="/fiction">
        <div className="times">
          <img src="images/times-circle-regular.svg" alt="times" />
        </div>
      </a>
      <div className="embedded-player-fiction">
        <iframe
          title={url}
          src={url}
          responsive="true"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="player-text-fiction">
          <p>{title}</p>
          <br></br>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedPlayerFiction;


