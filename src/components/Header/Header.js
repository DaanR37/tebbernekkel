import "./header.scss";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header-container">

            <ul className="header-left-side">
                <li className="commercial-btn">
                    <Link to="/commercials">commercials</Link>
                </li>
                <li className="fiction-btn">
                    <Link to="/fiction">fiction</Link>
                </li>
            </ul>

            <Link to="/" className="bbk-logo">
                <img
                    src="images/BBKK-pink.png" alt="tebbernekkel logo"
                />
            </Link>

            <ul className="header-right-side">
                <li className="about-btn">
                    <Link to="/about">about</Link>
                </li>
                <li className="contact-btn">
                    <Link to="/contact">contact</Link>
                </li>
            </ul>

        </header>
    );
}

