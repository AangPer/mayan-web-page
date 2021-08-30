import React, { useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const Question = ({ index, toggle, clicked, question, ask }) => {
    return (
      <ScrollAnimation animateIn="animate__animated animate__zoomIn" duration="0.5"   className="FAQ__question-ctnr" onClick={() => toggle(index)}>
        <div
          className={`FAQ__question ${
            clicked === index
              ? "FAQ__question--active"
              : "FAQ__question--inactive"
          }`}
        >
          <p className={`linksTxt ${clicked === index ? " u-txt-white" : null}`}>
            {question}
          </p>
        </div>
        <div
          className={`FAQ__answer ${
            clicked === index ? "FAQ__answer--active" : "FAQ__answer--inactive"
          }`}
        >
          <p className="paragraph u-txt-center">{ask}</p>
        </div>
      </ScrollAnimation>
    );
  };

  return (
    <section className="FAQ" id="faq">
      <div className="FAQ__ctnr">
        <div className="FAQ__txt-box">
          <h2 className="headerTitle u-txt-center">
          <ScrollAnimation animateIn="animate__animated animate__slideInUp">
            <b>FAQ</b>
          </ScrollAnimation>
          </h2>
        </div>
        <Question
          key={0}
          index={0}
          clicked={clicked}
          toggle={toggle}
          question="Pregunta"
          ask="Question"
        />
      </div>
    </section>
  );
};

export default FAQ;
