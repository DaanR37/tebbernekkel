import "./creativeslist.scss";
import { NavLink } from 'react-router-dom';
import HeaderTransparent from "../Headertransparent/HeaderTransparent";

export default function CreativesList() {
    return (
        <section id="list-container">
            <div className="header-transparent-creativeslist">
                <HeaderTransparent />
            </div>
            <div className="creatives-card">
                <ul className="names-list">
                    <li>
                        <NavLink to="/fictionachmed" className="achmed-btn">achmed</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionblue" className="blue-btn">blue</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionfolkert" className="folkert-btn">folkert</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionjoosje" className="joosje-btn">joosje</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}
