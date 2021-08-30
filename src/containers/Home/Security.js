import React, {useRef, useEffect} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import SecurityLogo from "../../assets/svgs/security.svg";
import Lottie from "lottie-react";
import StellarLock from "../../assets/animations/security-stellar.json";

function Badge({text, delay}) {
  return (
    <div className="security__badges-badge">
      <ScrollAnimation animateIn="animate__animated animate__slideInUp" delay={delay} duration="0.5">
      <p className="linksTxt">{text}</p>
      </ScrollAnimation>
    </div>
  );
}

const Security = () => {

  const lottieRef = useRef();
  useEffect(() => {
    lottieRef.current.stop()
  }, [])

  return (
    <section className="security" id="security">
      <div className="security__ctnr">
        <div className="security__txt-box">
          <h2 className="headerTitle">
          <ScrollAnimation animateIn="animate__animated animate__slideInDown">
            <b>Secure & Private</b>
          </ScrollAnimation>
          </h2>
          <br />
          <br />
          <p className="paragraph">
          <ScrollAnimation animateIn="animate__animated animate__slideInUp">
            Mayan is ..
          </ScrollAnimation>
          </p>
          <div className="security__badges">
            <Badge text='Biometrics' delay="0"/>
            <Badge text='Stellar' delay="100"/>
            <Badge text='Encryption' delay="150"/>
          </div>
          <div className="security__badges">
          <Badge text='Privacy by design' delay="200"/>
          <Badge text='Data privacy first' delay="250"/>
          </div>
        </div>
        <ScrollAnimation className="security__img-box" animateIn="animate__animated animate__fadeInUp" afterAnimatedIn={() => lottieRef.current.play()}>
          <Lottie lottieRef={lottieRef} animationData={StellarLock} />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Security;
