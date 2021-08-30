import React from "react";
import "./Footer.scss";
import "./FooterResponsive.scss";
import LOGO from "../../assets/svgs/logo.svg";
import InstagramLogo from "../../assets/svgs/instagram.svg";
import FacebookLogo from "../../assets/svgs/facebook.svg";
import TwitterLogo from "../../assets/svgs/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__ctnr">
        <div className="footer__left-content">
          <img src={LOGO} alt="" />
        </div>
        <div className="footer__middle">
          <p className="linksTxt u-txt-center u-txt-white">
            We’re social, follow us 😀
          </p>
          <div className="footer__social-media">
            <img src={InstagramLogo} alt="" />
            <img src={FacebookLogo} alt="" />
            <img src={TwitterLogo} alt="" />
          </div>
          <p className="paragraph paragraph--feature u-txt-center u-txt-white">
            2021 © All Rights Reserved
          </p>
        </div>
        <div className="footer__right-content">
        <a className="linksTxt u-txt-center u-txt-white" href="#none">Privacy</a>
        <a className="linksTxt u-txt-white" href="#none">Terms & conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
