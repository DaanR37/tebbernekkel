import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="header-container">
      <div className="desktop-container desktop-container-colored">
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
            <NavLink to="/featured" reloadDocument className="commercial-btn">featured</NavLink>
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
            <NavLink to="/directorslist" reloadDocument className="fiction-btn">directors</NavLink>
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
            <NavLink to="/awards" reloadDocument className="about-btn">awards</NavLink>
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

      <div id="mobile-container" className="mobile-container">
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

