import React from 'react'
import "./Navbar.scss"
import "./NavbarResponsive.scss"
import LOGO from "../../assets/svgs/logo.svg";

const Navbar = () => {

    const scrollToTop = () => {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    };

    return (

        <div className="navbar">
            <div className="navbar__ctnr">
            <div className="navbar__logo-ctnr" onClick={() => scrollToTop()}><img src={LOGO} alt="Logo"/></div>
            <div className="navbar__links">
                <ul>
                    <li><a className="linksTxt" href="#hiw"> How it works</a></li>
                    <li><a className="linksTxt" href="#features">Features</a></li>
                    <li><a className="linksTxt" href="#security">Security</a></li>
                    <li><a className="linksTxt" href="#faq">FAQ</a></li>
                    <li><a className="linksTxt" href="#early"><button className="btn btn--nav-link">Early Access</button></a></li>
                </ul>
            </div>
            </div>
        </div>
            
    )
}

export default Navbar;
