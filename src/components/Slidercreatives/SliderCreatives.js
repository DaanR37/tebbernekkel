// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
import { NavLink } from 'react-router-dom';
// import { motion } from "framer-motion";

import "./slidercreatives.scss"

export default function SliderCreatives() {
    return (
        <section id="slider-container">

            <ul className="names-list-slider">
                <li>
                    <NavLink to="/fictionfolkert" className="folkert-btn-slider">
                        <h1>Folkert</h1>
                    </NavLink>
                </li>
                <p>|</p>
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
                    <NavLink to="/fictionjoosje" className="joosje-btn-slider">
                        <h1>Joosje</h1>
                    </NavLink>
                </li>
            </ul>

            {/* <ul className="names-list-slider">
                <motion.li
                    whileHover={{
                        scale: 1.1
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 80
                    }}
                >
                    <NavLink to="/fictionfolkert" className="folkert-btn-slider">
                        <h1>Folkert</h1>
                    </NavLink>
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
                    <NavLink to="/fictionachmed" className="achmed-btn-slider">
                        <h1>Achmed</h1>
                    </NavLink>
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
                    <NavLink to="/fictionblue" className="blue-btn-slider">
                        <h1>Blue</h1>
                    </NavLink>
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
                    <NavLink to="/fictionjoosje" className="joosje-btn-slider">
                        <h1>Joosje</h1>
                    </NavLink>
                </motion.li>
            </ul> */}

        </section>
    );
}

