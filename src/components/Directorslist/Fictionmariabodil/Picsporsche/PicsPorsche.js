import { useNavigate } from "react-router-dom";

export default function PicsPorsche() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/fictionmariabodil")
  };

  return (
    <section className="photo-folder-page">
      <div className="logo-bbkk">
        <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
      </div>
      <div className="times" onClick={handleClose}>
        <img src="images/times-circle-regular-copy.svg" alt="times" />
      </div>

      <div className="row">
        <div className="column">
          <img src="images/picsporschejson/1.jpg" alt="1" />
          <img src="images/picsporschejson/6.jpg" alt="1" />
          <img src="images/picsporschejson/27.jpg" alt="1" />
        </div>
        <div className="column">
          <img src="images/picsporschejson/5.jpg" alt="1" />
          <img src="images/picsporschejson/9.jpg" alt="1" />
          <img src="images/picsporschejson/25.jpg" alt="1" />
        </div>
        <div className="column">
          <img src="images/picsporschejson/2.jpg" alt="1" />
          <img src="images/picsporschejson/34.jpg" alt="1" />
          <img src="images/picsporschejson/37.jpg" alt="1" />
        </div>
      </div>
    </section>
  )
}
