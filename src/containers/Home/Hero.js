import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import BackgroundVideo from '../../assets/videos/hero-video.mp4';
import BackgroundVideoMobile from '../../assets/videos/hero-video-mobile.mp4';

const Hero = () => {
    return (
        <header className="hero">
        <div className="hero__txt-box">
          <h1 className="hugeTxt">
          <ScrollAnimation animateIn="animate__animated animate__fadeIn">
            <span className="hugeTxt--dot">Transfer</span>
            <span>Money</span>
            <br />
            <span className="hugeTxt--dot">To/In Mexico</span>
            <span>Easy</span>
            <br />
            <span className="hugeTxt--dot">Fast</span>
            <span>Anytime</span>
            </ScrollAnimation>
          </h1>
        </div>
        <video className="hero__bg hero__bg--desktop" autoPlay loop muted id="video">
          <source src={BackgroundVideo}/>
        </video>
        <video className="hero__bg hero__bg--mobile" autoPlay loop muted id="video">
          <source src={BackgroundVideoMobile}/>
        </video>
      </header>
    )
}

export default Hero
