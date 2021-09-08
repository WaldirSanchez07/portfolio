import React, { useState } from 'react'
import { Link as LinkS } from "react-scroll"
import Logo from "../../assets/images/logo.svg"
const Navbar = () => {
    const [navBg, setNavBg] = useState(false);
    const [menu, setMenu] = useState('off');
    const element = document.getElementsByClassName('nav-menu');

    const changeBackground = () => {
        if (window.scrollY >= 70) setNavBg(true)
        else setNavBg(false)
    }
    
    const onMenu = () =>{
        element[0].style = "";
        setMenu("true");
    }
    const onActive = () => {
        if(menu === "off" || menu === "false"){
            setMenu("true");
            element[0].style = "";
        } 
        else{
            setMenu("false");
            setTimeout(function(){
                if(element[0].ariaLabel === "false") element[0].style.display = "none";
            },500)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navBg ? 'nav nav-active' : 'nav'}>
                <div className="nav-container">
                    <LinkS to="home" smooth={true} duration={500} spy={true} exact='true' className="nav-logo">
                        <img src={Logo} alt="logo" />
                    </LinkS>
                    <div className="mobile-icon" onClick={onMenu}>
                        <i className="material-icons-round">menu</i>
                    </div>
                    <ul className="nav-menu" aria-label={menu}>
                        <div className="menu-close" onClick={onActive}></div>
                        <li className="nav-item">
                            <LinkS to="home" smooth={true} duration={500} spy={true} exact='true' offset={-70}
                                activeClass="active"
                                onClick={onActive}
                                className="item-link">Home</LinkS>
                        </li>
                        <li className="nav-item">
                            <LinkS to="about" smooth={true} duration={500} spy={true} exact='true' offset={-70}
                                activeClass="active"
                                onClick={onActive}
                                className="item-link">About</LinkS>
                        </li>
                        <li className="nav-item">
                            <LinkS to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-65}
                                activeClass="active"
                                onClick={onActive}
                                className="item-link">Portfolio</LinkS>
                        </li>
                        <li className="nav-item">
                            <LinkS to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-59}
                                activeClass="active"
                                onClick={onActive}
                                className="item-link">Contact</LinkS>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
