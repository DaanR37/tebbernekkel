import "./headertransparent.scss";
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export default function HeaderTransparent() {
    return (
        <header className="header-container-transparent">
            <div className="desktop-container-transparent">
                <ul className="header-left-side-transparent">
                    <motion.li
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80
                        }}
                    >
                        <NavLink to="/commercials" reloadDocument className="commercial-btn-transparent">latest</NavLink>
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
                        <NavLink to="/creativeslist" reloadDocument className="fiction-btn-transparent">creatives</NavLink>
                    </motion.li>
                </ul>
                <div>
                    <Link to="/" className="bbk-logo-transparent">
                        <img
                            src="images/BBKK-pink.png" alt="tebbernekkel logo"
                        />
                    </Link>
                </div>
                <ul className="header-right-side-transparent">
                    <motion.li
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 80
                        }}
                    >
                        <NavLink to="/about" reloadDocument className="about-btn-transparent">awards</NavLink>
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
                        <NavLink to="/contact" reloadDocument className="contact-btn-transparent">contact</NavLink>
                    </motion.li>
                </ul>
            </div>

            <div id="mobile-container-transparent">
                <ul className="nav-buttons-transparent">
                    <li>
                        <div className="bbk-logo-mobile-transparent">
                            <Link to="/">
                                <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/commercials" reloadDocument className="commercial-btn-transparent">latest</NavLink>
                    </li>
                    <li>
                        <NavLink to="/creativeslist" reloadDocument className="fiction-btn-transparent">creatives</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" reloadDocument className="about-btn-transparent">awards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" reloadDocument className="contact-btn-transparent">contact</NavLink>
                    </li>
                </ul>
            </div>

        </header>
    );
}
