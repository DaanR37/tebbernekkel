import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./slidermobile.scss";

export default function SliderMobile() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='dropdown-menu'>
            <button className='dropdown-menu__toggle' onClick={toggleDropdown}>
                <span>creatives</span>
                <span className={`dropdown-menu__arrow ${isOpen ? 'open' : ''}`}></span>
            </button>
            {isOpen && (
                <ul className={`dropdown-menu__list ${isOpen ? 'open' : ''}`}>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionachmed" className="dropdown-menu__link achmed" reloadDocument>
                            Achmed
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionblue" className="dropdown-menu__link blue" reloadDocument>
                            Blue
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictiondamien" className="dropdown-menu__link damien" reloadDocument>
                            Damien
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionfolkert" className="dropdown-menu__link folkert" reloadDocument>
                            Folkert
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionjoosje" className="dropdown-menu__link joosje" reloadDocument>
                            Joosje
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionmariabodil" className="dropdown-menu__link mariabodil" reloadDocument>
                            Mariabodil
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionshay" className="dropdown-menu__link shay" reloadDocument>
                            Shay
                        </NavLink>
                    </li>
                    <li className='dropdown-menu__item'>
                        <NavLink to="/fictionsimon" className="dropdown-menu__link simon" reloadDocument>
                            Simon
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};