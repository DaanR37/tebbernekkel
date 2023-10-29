import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./sliderfeaturedmobile.scss";

export default function SliderFeaturedMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.replace('/', '');
  const capitalizedPathname = pathnameWithoutSlash.charAt(0).toUpperCase() + pathnameWithoutSlash.slice(1);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div className='dropdown-menu'>
      <button className='dropdown-menu__toggle' onClick={toggleDropdown}>
        <span className='shadowed-text'>{capitalizedPathname}</span>
        <span className={`dropdown-menu__arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      {isOpen && (
        <ul className={`dropdown-menu__list ${isOpen ? 'open' : ''}`}>
          <li className='dropdown-menu__item shadowed-text'>
            <NavLink to="/featured" className="dropdown-menu__link bbkk" reloadDocument>
              BBKK
            </NavLink>
          </li>
          <li className='dropdown-menu__item shadowed-text'>
            <NavLink to="/formats" className="dropdown-menu__link formats" reloadDocument>
              Formats
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};