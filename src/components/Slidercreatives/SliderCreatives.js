import { NavLink } from 'react-router-dom';
import "./slidercreatives.scss"

export default function SliderCreatives() {
    return (
        <section id="slider-container">
            <ul className="names-list-slider">
                <li>
                    <NavLink to="/fictionachmed" className="achmed-btn-slider">
                        <h1>Achmed</h1>
                    </NavLink>
                </li>
                <p>|</p>
                <li>
                    <NavLink to="/fictionblue" className="blue-btn-slider">
                        <h1>Blue</h1>
                    </NavLink>
                </li>
                <p>|</p>
                <li>
                    <NavLink to="/fictiondamien" className="damien-btn-slider">
                        <h1>Damien</h1>
                    </NavLink>
                </li>
                <p>|</p>
                <li>
                    <NavLink to="/fictionfolkert" className="folkert-btn-slider">
                        <h1>Folkert</h1>
                    </NavLink>
                </li>
                <p>|</p>
                <li>
                    <NavLink to="/fictionjoosje" className="joosje-btn-slider">
                        <h1>Joosje</h1>
                    </NavLink>
                </li>
                <p>|</p>
                <li>
                    <NavLink to="/fictionmariabodil" className="mariabodil-btn-slider">
                        <h1>maria bodil</h1>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}

