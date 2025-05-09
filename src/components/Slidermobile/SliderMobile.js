import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./slidermobile.scss";

export default function SliderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.replace("/fiction", "");
  const capitalizedPathname = pathnameWithoutSlash.charAt(0).toUpperCase() + pathnameWithoutSlash.slice(1);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu__toggle" onClick={toggleDropdown}>
        <span className="shadowed-text">{capitalizedPathname}</span>
        <span className={`dropdown-menu__arrow ${isOpen ? "open" : ""}`}></span>
      </button>
      {isOpen && (
        <ul className={`dropdown-menu__list ${isOpen ? "open" : ""}`}>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionachmed" className="dropdown-menu__link achmed" reloadDocument>
              Achmed
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionblue" className="dropdown-menu__link blue" reloadDocument>
              Blue
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionbram" className="dropdown-menu__link bram" reloadDocument>
              Bram
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictiondamien" className="dropdown-menu__link damien" reloadDocument>
              Damien
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionjoosje" className="dropdown-menu__link joosje" reloadDocument>
              Joosje
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionmariabodil" className="dropdown-menu__link mariabodil" reloadDocument>
              Mariabodil
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionsacha" className="dropdown-menu__link sacha" reloadDocument>
              Sacha
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionshay" className="dropdown-menu__link shay" reloadDocument>
              Shay
            </NavLink>
          </li>
          <li className="dropdown-menu__item shadowed-text">
            <NavLink to="/fictionsimon" className="dropdown-menu__link simon" reloadDocument>
              Simon
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
