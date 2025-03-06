import { useNavigate } from "react-router-dom";
import "./picsglenfidich.scss";

export default function PicsGlenFidich() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/fictionmariabodil")
  };

  return (
    <section className="photo-grid-glenfidich">
      <div className="logo-bbkk">
        <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
      </div>
      <div className="times" onClick={handleClose}>
        <img src="images/times-circle-regular-copy.svg" alt="times" />
      </div>

      <div className="row">
        <div className="column">
          <img src="images/picsglenfidichjson/3.jpg" alt="1" />
          <img src="images/picsglenfidichjson/5.jpg" alt="1" />
        </div>
        <div className="column">
          <img src="images/picsglenfidichjson/6.jpg" alt="1" />
          <img src="images/picsglenfidichjson/8.jpg" alt="1" />
        </div>
        <div className="column">
          <img src="images/picsglenfidichjson/9.jpg" alt="1" />
          <img src="images/picsglenfidichjson/10.jpg" alt="1" />
        </div>
        <div className="column">
          <img src="images/picsglenfidichjson/11.jpg" alt="1" />
          <img src="images/picsglenfidichjson/12.jpg" alt="1" />
        </div>
      </div>
      
    </section>
  )
}
