import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <div id="Education" className="education">
      <div className="d-flex justify-content-center my-5">
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <h1 className="education-heading">Education</h1>
        </ScrollAnimation>
      </div>
      <div className="container education-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h3>2016-2018</h3>
              <p>Higher Secondary Science </p>
              <p>Gyan Bikash Academy, AIDC Guwahati </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
            >
              <h3>2018-2022</h3>
              <p>B. TECH CSE</p>
              <p>Kaziranga University, Jorhat</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
