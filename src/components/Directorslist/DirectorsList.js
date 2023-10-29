import "./directorslist.scss";
import { NavLink } from 'react-router-dom';
import HeaderTransparent from "../Headertransparent/HeaderTransparent";
import Animatedpage from "../Animatedpage";

export default function DirectorsList() {
    return (
        <Animatedpage>
            <section id="list-container">
                {/* <div className="header-transparent-creativeslist"> */}
                    <HeaderTransparent />
                {/* </div> */}
                <div className="creatives-card">
                    <ul className="names-list">
                        <li>
                            <NavLink to="/fictionachmed" className="achmed-btn" reloadDocument>achmed akkabi</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictionblue" className="blue-btn" reloadDocument>blue ter burg</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictiondamien" className="damien-btn" reloadDocument>damien hope</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictionfolkert" className="folkert-btn" reloadDocument>folkert verdoorn</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictionjoosje" className="joosje-btn" reloadDocument>joosje duk</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictionmariabodil" className="mariabodil-btn" reloadDocument>maria bodil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictionshay" className="shay-btn" reloadDocument>shay latukolan</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fictionsimon" className="simon-btn" reloadDocument>simon becks</NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        </Animatedpage>
    )
}
