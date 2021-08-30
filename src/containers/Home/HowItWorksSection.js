import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import PassingMoneyAnimation from "../../assets/animations/sending-with-mayan.json";
import ReceivingMoneyAnimation from "../../assets/animations/people-receiving-money.json";
import GuySending from "../../assets/svgs/guy-sending-money.svg"
import Lottie from "lottie-react";

const HowItWorksSection = () => {

  return (
    <section className="HIW" id="hiw">
      <div className="HIW__txt-box">
        <h2 className="headerTitle u-txt-center">
        <ScrollAnimation animateIn="animate__animated animate__slideInUp">
          Will help you <b> send money fast </b>
          and <b> easy </b>
        </ScrollAnimation>
        </h2>
      </div>
      <div className="HIW__imgs-ctnr">

        <div className="HIW__lottie-ctnr HIW__lottie-ctnr--desktop">
          <div className="HIW__lottie-animation">
            <Lottie animationData={PassingMoneyAnimation} />
            </div>
          <div className="HIW__taglines-ctnr">
            <div className="HIW__tagline-box">
              <div className="HIW__tagline HIW__tagline--left">
                <p className="paragraph u-txt-center">
                <ScrollAnimation animateIn="animate__animated animate__slideInUp">
                  Send money a tus seres queridos, sin comisiones grandes y sin
                  retrasos
                </ScrollAnimation>
                </p>
              </div>
            </div>
            <div className="HIW__tagline-box">
              <div className="HIW__tagline HIW__tagline--right">
                <p className="paragraph u-txt-center">
                  <ScrollAnimation animateIn="animate__animated animate__slideInUp">
                Recibe tu envío en segundos sin necesidad de ir al banco
                  </ScrollAnimation>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="HIW__lottie-ctnr HIW__lottie-ctnr--mobile">
          <div className="HIW__lottie-animation">
            <img src={GuySending} alt="" width="100%"/>
          </div>
          <div className="HIW__description">
              <p className="paragraph u-txt-center">
                  Send money a tus seres queridos, sin comisiones grandes y sin
                  retrasos
              </p>
          </div>
        </div>

        <div className="HIW__lottie-ctnr HIW__lottie-ctnr--mobile">
          <div className="HIW__lottie-animation">
          <Lottie animationData={ReceivingMoneyAnimation} />
          </div>
          <div className="HIW__description">
              <p className="paragraph u-txt-center">
                  Send money a tus seres queridos, sin comisiones grandes y sin
                  retrasos
              </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
