import "./header.scss";
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Header() {
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
                            <NavLink to="/commercials" className="commercial-btn">commercials</NavLink>
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
                            <NavLink to="/fiction" className="fiction-btn">fiction</NavLink>
                        </motion.li>
                    </ul>
                    <div>
                        <Link to="/" className="bbk-logo">
                            <motion.img
                                initial={{ y: '+50vh', scale: 0.1 }}
                                animate={{
                                    scale: 1,
                                    y: 0,
                                    rotateY: 360
                                }}
                                transition={{
                                    duration: 1,
                                    type: 'tween'
                                }}
                                whileHover={{
                                    rotateX: 360
                                }}
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
                            <NavLink to="/about" className="about-btn">awards</NavLink>
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
                            <NavLink to="/contact" className="contact-btn">contact</NavLink>
                        </motion.li>
                    </ul>
                </div>
                <div className="bbk-logo-mobile">
                    <Link to="/">
                        <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
                    </Link>
                </div>
                <div id="mobile-container">
                    <ul className="nav-buttons">
                        <li>
                            <NavLink to="/commercials" className="commercial-btn">commercials</NavLink>
                        </li>
                        <li>
                            <NavLink to="/fiction" className="fiction-btn">fiction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="about-btn">awards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="contact-btn">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
    );
}

