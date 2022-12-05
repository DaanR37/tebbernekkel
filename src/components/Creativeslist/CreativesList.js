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
                        <NavLink to="/fictionachmed" className="achmed-btn">achmed akkabi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionblue" className="blue-btn">blue ter burg</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionfolkert" className="folkert-btn">folkert verdoorn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionjoosje" className="joosje-btn">joosje duk</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fictionmariabodil" className="mariabodil-btn">maria & bodil</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}
