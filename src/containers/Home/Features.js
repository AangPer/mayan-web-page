import React, {useState, useEffect, useRef} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Element, scroller } from "react-scroll";
import PhoneFrame from "../../assets/images/iPhoneFrame.webp";
import { ReactComponent as UserIcon } from "../../assets/svgs/account.svg";
import { ReactComponent as ShareIcon } from "../../assets/svgs/share.svg";
import { ReactComponent as ScanIcon } from "../../assets/svgs/scan.svg";
import View1 from "../../assets/images/view1.webp";
import View2 from "../../assets/images/view2.webp";
import View3 from "../../assets/images/view3.webp";


const Feature = ({
  title,
  subtitle,
  positionClass,
  scrollTarget,
  icon,
  scrollTo,
  setScreen,
  screen,
  active
}) => {

  return (
    <div
      className={`features__feature-box ${positionClass}`}
      onClick={() => {scrollTo(scrollTarget); setScreen(screen)}}
    >
      <ScrollAnimation animateIn="animate__animated animate__zoomIn"
        className={`features__feature-box__icon ${active ? "features__feature-box__icon--active" : ""}`}
      >
        {icon}
      </ScrollAnimation>
      <p className="linksTxt u-txt-center u-txt-white">
        <ScrollAnimation animateIn="animate__animated animate__slideInDown">
        {title}
        </ScrollAnimation>
      </p>
      <p className="paragraph paragraph--feature u-txt-center u-txt-white">
        <ScrollAnimation animateIn="animate__animated animate__slideInUp">
        {subtitle}
        </ScrollAnimation>
      </p>
    </div>
  );
}

const Features = () => {

  const [screen, setScreen] = useState(0);
  const timeoutRef = useRef(null);

  
  const delay = 2600;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 300,
      smooth: "easeInOutQuart",
      containerId: "featuresScreen",
      horizontal: true,
    });
  };

  scrollTo(`feature${screen+1}`);
  

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
        () => 
         setScreen((prevScreen) => 
            prevScreen === 3 - 1 ? 0 : prevScreen + 1
         )
         ,
       delay
      );
      return () => {
        resetTimeout();
      };
  }, [screen]);
  
  return (
    <section className="features" id="features">
      <div className="features__txt-box">
        <h2 className="headerTitle u-txt-center u-txt-white">
        <ScrollAnimation animateIn="animate__animated animate__slideInUp">
          Will help you <b> send money fast </b>
          and <b> easy </b>
        </ScrollAnimation>
        </h2>
      </div>
      <div className="features__ctnr">
        <div className="features__app">
          <img src={PhoneFrame} alt="" />
          <div className="features__screen">
            <div className="features__screen-ctnr" id="featuresScreen">
              <Element
                id="feature1"
                name="feature1"
                className="features__app-view"
              >
                <img src={View1} alt="" />
              </Element>
              <Element
                id="feature2"
                name="feature2"
                className="features__app-view"
              >
                <img src={View2} alt="" />
              </Element>
              <Element
                id="feature3"
                name="feature3"
                className="features__app-view"
              >
                <img src={View3} alt="" />
              </Element>
            </div>
          </div>
        </div>

        <Feature
          title="Send or pay"
          subtitle="Send money to your friends or familiar"
          positionClass="features__feature-box--1"
          scrollTarget="feature1"
          scrollTo={scrollTo}
          icon={<UserIcon />}
          active={screen === 0 ? true : false}
          setScreen={setScreen}
          screen={0}
          />
        <Feature
          title="Send or pay"
          subtitle="Send money to your friends or familiar"
          positionClass="features__feature-box--2"
          scrollTarget="feature2"
          scrollTo={scrollTo}
          icon={<ShareIcon />}
          active={screen === 1 ? true : false}
          setScreen={setScreen}
          screen={1}
          />
        <Feature
          title="Send or pay"
          subtitle="Send money to your friends or familiar"
          positionClass="features__feature-box--3"
          scrollTarget="feature3"
          scrollTo={scrollTo}
          icon={<ScanIcon />}
          active={screen === 2 ? true : false}
          setScreen={setScreen}
          screen={2}
        />
      </div>
    </section>
  );
};

export default Features;
