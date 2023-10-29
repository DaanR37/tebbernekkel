import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export default function HeaderTransparent() {
  return (
    <header className="header-container header-container-transparent">
      <div className="desktop-container">
        <ul className="header-left-side header-left-side-transparent">
          <motion.li
            whileHover={{
              scale: 1.1
            }}
            transition={{
              type: 'spring',
              stiffness: 80
            }}
          >
            <NavLink to="/featured" reloadDocument className="commercial-btn commercial-btn-transparent">featured</NavLink>
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
            <NavLink to="/directorslist" reloadDocument className="fiction-btn fiction-btn-transparent">directors</NavLink>
          </motion.li>
        </ul>
        <div>
          <Link to="/" className="bbk-logo bbk-logo-transparent">
            <img
              src="images/BBKK-pink.png" alt="tebbernekkel logo"
            />
          </Link>
        </div>
        <ul className="header-right-side header-right-side-transparent">
          <motion.li
            whileHover={{
              scale: 1.1
            }}
            transition={{
              type: 'spring',
              stiffness: 80
            }}
          >
            <NavLink to="/awards" reloadDocument className="about-btn-transparent">awards</NavLink>
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

      <div id="mobile-container-transparent" className="mobile-container">
        <ul className="nav-buttons">
          <li>
            <div className="bbk-logo-mobile">
              <Link to="/">
                <img src="images/BBKK-pink.png" alt="tebbernekkel logo" />
              </Link>
            </div>
          </li>
          <li>
            <NavLink to="/featured" reloadDocument className="commercial-btn">featured</NavLink>
          </li>
          <li>
            <NavLink to="/directorslist" reloadDocument className="fiction-btn">directors</NavLink>
          </li>
          <li>
            <NavLink to="/awards" reloadDocument className="about-btn">awards</NavLink>
          </li>
          <li>
            <NavLink to="/contact" reloadDocument className="contact-btn">contact</NavLink>
          </li>
        </ul>
      </div>

    </header>
  );
}
