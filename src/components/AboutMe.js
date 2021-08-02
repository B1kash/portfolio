import React from "react";
import me from "../2.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";
import resumee from "../Resume-Bikash-Baishya.pdf";

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
          <div className="abc col col-xm-12 align-self-start">
            <ScrollAnimation animateIn="fadeIn">
              <h1 className="about-heading">About Me</h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <p className="aboutme-para">
                Hello! I am Bikash. I am a computer science engineering student
                and also a frontend Web Developer and Web Designer. I create
                responsive websites. Bootstrap, React, Javascript, HTML, CSS are
                some of the technologies that I use.
              </p>
            </ScrollAnimation>
          </div>
          <div className="abc col col-xm-12 ">
            <div className="resume">
              <button className="resume-button">
                <a className="resume-button1" href={resumee} download>
                  Download Resume
                </a>
              </button>
            </div>
            <a
              className="social-icons"
              href="https://www.instagram.com/quick_._silver/"
            >
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" />
            </a>

            <a className="social-icons" href="https://github.com/B1kash">
              <img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" />
            </a>
            <a className="social-icons" href="#">
              <img src="https://img.icons8.com/color/48/000000/github.png" />
            </a>
            <a className="social-icons" href="#">
              <img src="https://img.icons8.com/color-glass/48/000000/twitter.png" />
            </a>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
