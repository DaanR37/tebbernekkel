import "./header.scss";
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Header() {

    // const refreshPageOnClick = () => {
    //     window.location.reload();
    // }

    return (
        <header className="header-container">
            <div className="desktop-container">
                <ul className="header-left-side">
                    <motion.li
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80
                        }}
                    >
                        <NavLink to="/commercials" reloadDocument className="commercial-btn">commercials</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80
                        }}
                    >
                        <NavLink to="/fiction" reloadDocument className="fiction-btn">fiction</NavLink>
                    </motion.li>
                </ul>
                <div>
                    <Link to="/" className="bbk-logo">
                        <img
                            src="images/BBKK-pink.png" alt="tebbernekkel logo"
                        />
                    </Link>
                </div>
                <ul className="header-right-side">
                    <motion.li
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80
                        }}
                    >
                        <NavLink to="/about" reloadDocument className="about-btn">awards</NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80
                        }}
                    >
                        <NavLink to="/contact" reloadDocument className="contact-btn">contact</NavLink>
                    </motion.li>
                </ul>
            </div>

            <div id="mobile-container">
                {/* <div className="bbk-logo-mobile">
                    <Link to="/">
                        <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
                    </Link>
                </div> */}
                <ul className="nav-buttons">
                    <li>
                        <div className="bbk-logo-mobile">
                            <Link to="/">
                                <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/commercials" reloadDocument className="commercial-btn">commercials</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fiction" reloadDocument className="fiction-btn">fiction</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" reloadDocument className="about-btn">awards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" reloadDocument className="contact-btn">contact</NavLink>
                    </li>
                </ul>
            </div>

        </header>
    );
}

