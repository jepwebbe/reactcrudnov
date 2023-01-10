import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../Assets/Images/Copyleft.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LoginPage from "../Pages/LoginPage";


function NavBar() {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleClick = () => {
        setIsDisplay(current => !current);
    }
    return (
        <header>
            <div className="Burger" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} /></div>
            <div className="LogoBlock"><a href="/"><img src={Logo} alt="Our logo" className="Logo" /></a></div>
            <nav>
                <ul className="InternalNav" 
                style={{ 
                    display: isDisplay ? 'none' : 'flex' }}>
                    <li className="NavLi" ><NavLink activeclassname="active" to="/">Hjem</NavLink></li>
                    <li className="NavLi" ><NavLink to="/web">Web</NavLink></li>
                    <li className="Dropdown NavLi"><NavLink to="/tekster">Tekster</NavLink>
                        <ul className="DropdownContent">
                            <li><NavLink to="/tekster#essays">Essays</NavLink></li>
                            <li><NavLink to="/tekster#akademia">Akademia</NavLink></li>
                        </ul>
                    </li>
                    <li className="NavLi"><NavLink to="/om">Om</NavLink></li>
                    <li className="NavLi"><NavLink to="/login" element={<LoginPage/>}>Login</NavLink></li>

                </ul>
                <ul className="ExternalNav">
                    <li><a rel="noreferrer" href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a rel="noreferrer" href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a rel="noreferrer" href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;