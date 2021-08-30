import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SmartPhone from "../../assets/images/phone.webp";
import ArrowIcon from "../../assets/svgs/arrow-right.svg";
import WatermarkLogo from "../../assets/svgs/mayan-logo-watermark.svg";

const EarlyAccess = () => {
  return (
    <section className="earlyAccess" id="early">
      <div className="earlyAccess__ctnr">
        <div className="earlyAccess__data-box">
          <h2 className="headerTitle">
          <ScrollAnimation animateIn="animate__animated animate__slideInUp">
            <b>Early Access</b>
          </ScrollAnimation>
          </h2>
          <br />
          <p className="paragraph">
          <ScrollAnimation animateIn="animate__animated animate__slideInUp">
            Be the first to participate in our beta and more
          </ScrollAnimation>
          </p>
          <br />
          <form className="earlyAccess__form">
            <label>
              Name
              <input id="Name" name="Name" type="text" />
            </label>
            <label id="Email" name="Email">
              Email
              <input type="email" />
            </label>
            <button className="btn btn--submit">
              Get early access
              <img src={ArrowIcon} alt="" />
            </button>
          </form>
        </div>
        <div className="earlyAccess__img-box">
          <img src={SmartPhone} alt="" />
        </div>
      </div>
        <img className="earlyAccess__overflowImage" src={WatermarkLogo} alt="" />
    </section>
  );
};

export default EarlyAccess;
