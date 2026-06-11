import "./directorslist.scss";
import { NavLink } from "react-router-dom";
import HeaderTransparent from "../Headertransparent/HeaderTransparent";
import Animatedpage from "../Animatedpage";

export default function DirectorsList() {
  return (
    <Animatedpage>
      <section id="list-container">
        <HeaderTransparent />
        <div className="creatives-card">
          <ul className="names-list">
            {/* Achmed Akkabi */}
            <li>
              <NavLink to="/fictionachmed" className="achmed-btn" reloadDocument>
                achmed akkabi
              </NavLink>
            </li>
            {/* Arjen Schotel */}
            <li>
              <NavLink to="/fictionarjen" className="arjen-btn" reloadDocument>
                arjen schotel
              </NavLink>
            </li>
            {/* Blue */}
            <li>
              <NavLink to="/fictionblue" className="blue-btn" reloadDocument>
                blue
              </NavLink>
            </li>
            {/* Damien Hope */}
            <li>
              <NavLink to="/fictiondamien" className="damien-btn" reloadDocument>
                damien hope
              </NavLink>
            </li>
            {/* Joosje Duk */}
            <li>
              <NavLink to="/fictionjoosje" className="joosje-btn" reloadDocument>
                joosje duk
              </NavLink>
            </li>
            {/* Maria Bodil */}
            <li>
              <NavLink to="/fictionmariabodil" className="mariabodil-btn" reloadDocument>
                maria bodil
              </NavLink>
            </li>
            {/* More Magenta */}
            <li>
              <NavLink to="/fictionmoremagenta" className="moremagenta-btn" reloadDocument>
                more magenta
              </NavLink>
            </li>
            {/* Sacha */}
            <li>
              <NavLink to="/fictionsacha" className="sacha-btn" reloadDocument>
                sacha polak
              </NavLink>
            </li>
            {/* Shay Latukolan */}
            <li>
              <NavLink to="/fictionshay" className="shay-btn" reloadDocument>
                shay latukolan
              </NavLink>
            </li>
            {/* Thomas Jullien */}
            <li>
              <NavLink to="/fictionthomas" className="thomas-btn" reloadDocument>
                thomas jullien
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </Animatedpage>
  );
}
