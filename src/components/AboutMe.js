import React from "react";
import me from "../2.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <div id="About" className="container py-5">
      <div className="row" id="about-row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <ScrollAnimation animateIn="fadeIn">
              <img className="profile-img" src={me} alt="Me..." />
            </ScrollAnimation>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="about-heading">About Me</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <p>
              Hello! I am bikash. I am a computer science engineering stuent.
              I'm a frontend web Devloper and Web designer. I create responsive
              websites. Technologies i used is BootStrap, React, Javascript,
              Html, Css.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
