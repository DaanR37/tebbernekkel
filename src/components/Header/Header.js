import "./header.scss";
import {  Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header-container">

            <ul className="header-left-side">
                <li>
                    <NavLink to="/commercials" className="commercial-btn">commercials</NavLink>
                </li>
                <li>
                    <NavLink to="/fiction" className="fiction-btn">fiction</NavLink>
                </li>
            </ul>

            <Link to="/" className="bbk-logo">
                <img
                    src="images/BBKK-pink.png" alt="tebbernekkel logo"
                />
            </Link>

            <ul className="header-right-side">
                <li>
                    <NavLink to="/about" className="about-btn">about</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="contact-btn">contact</NavLink>
                </li>
            </ul>

        </header>
    );
}

