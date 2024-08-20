import { NavLink } from "react-router-dom";
import "./slidercreatives.scss";

export default function SliderCreatives() {
  return (
    <section id="slider-container">
      <ul className="names-list-slider">
        <li>
          <NavLink to="/fictionachmed" className="achmed-btn-slider" reloadDocument>
            <h1>Achmed</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictionblue" className="blue-btn-slider" reloadDocument>
            <h1>Blue</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictiondamien" className="damien-btn-slider" reloadDocument>
            <h1>Damien</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictionjoosje" className="joosje-btn-slider" reloadDocument>
            <h1>Joosje</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictionmariabodil" className="mariabodil-btn-slider" reloadDocument>
            <h1>mariabodil</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictionshay" className="shay-btn-slider" reloadDocument>
            <h1>Shay</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictionsimon" className="simon-btn-slider" reloadDocument>
            <h1>Simon</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/fictionbram" className="bram-btn-slider" reloadDocument>
            <h1>Bram</h1>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
