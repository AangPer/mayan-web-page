import "./Home.scss";
import "./HomeResponsive.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HowItWorksSection from "./HowItWorksSection";
import Features from "./Features";
import Security from "./Security";
import Hero from "./Hero";
import FAQ from "./FAQ";
import EarlyAccess from "./EarlyAccess";
import MetaTags from 'react-meta-tags';
import MetaHomeImg from '../../assets/meta/mayan.png'

const Home = () => {
  return (
    <>
      <MetaTags>
        <title>Mayan</title>
        <meta property="og:type" content="website" />
        <meta property="og:image" content={MetaHomeImg} />
        <meta property="og:title" content="Mayan - Transfer Money" />
        <meta
          name="description"
          content="Transfer Money To/In Mexico Easy Fast Anytime"
        />
        <meta property="og:url" content="https://www.mayan.cash/" />
        <meta property="og:site_name" content="Mayan.cash" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@theRealMayan" />
        <meta name="twitter:creator" content="@theRealMayan" />
        <meta name="twitter:title" content="Mayan - Transfer Money" />
        <meta
          name="twitter:description"
          content="Transfer Money To/In Mexico Easy Fast Anytime"
        />
        <meta name="twitter:image" content={MetaHomeImg} />
      </MetaTags>
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <Features />
      <Security />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </>
  );
};

export default Home;
