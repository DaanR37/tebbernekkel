import { NavLink } from 'react-router-dom';
import "./sliderfeatured.scss";

export default function SliderFeatured() {
  return (
    <section id="slider-container-featured">
      <ul className="names-list-slider-featured">
        <li>
          <NavLink to="/featured" className="bbkk-btn-slider" reloadDocument>
            <h1>BBKK</h1>
          </NavLink>
        </li>
        <p>|</p>
        <li>
          <NavLink to="/formats" className="formats-btn-slider" reloadDocument>
            <h1>Formats</h1>
          </NavLink>
        </li>
      </ul>
    </section>
  )
}
