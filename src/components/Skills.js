import React from "react";
import me from "../me.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div>
      <div className="container" id="skills">
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h1>SKILLS</h1>
        </ScrollAnimation>

        <div className="row" id="Skilss-row">
          <div className="col-lg-6 col-xm-12">
            <div className="container">
              <img className="main-image" src={me} alt="shga" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <div className="container">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutLeft"
              >
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
                <img src="https://img.icons8.com/color/48/000000/css3.png" />
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" />
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                <img src="https://img.icons8.com/color/48/000000/npm.png" />
              </ScrollAnimation>
              <br></br>
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="bounceOutRight"
              >
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.png" />
                <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
                <img src="https://img.icons8.com/color/48/000000/git.png" />
                <img src="https://img.icons8.com/fluency/48/000000/mysql-logo.png" />
                <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" />
              </ScrollAnimation>
              <br></br>
              <br></br>
              <div className="col-lg-6">
                <h1 class="Proficiency">
                  Proficiency <br></br>
                </h1>
                <div className="progress-info">
                  <div class="progress-label">
                    <span>Frontend/Design</span>
                  </div>
                  <div className="progress-percentage">
                    <span>70%</span>
                  </div>
                  <div className="progress ">
                    <div
                      className="a progress-bar"
                      id="1"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="progress-label">
                    <span>BackEnd</span>
                  </div>
                  <div className="progress-percentage">
                    <span>30%</span>
                  </div>
                  <div className="progress ">
                    <div
                      className="b progress-bar"
                      id="2"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="progress-label">
                    <span>Programming</span>
                  </div>
                  <div className="progress-percentage">
                    <span>70%</span>
                  </div>
                  <div className="progress ">
                    <div
                      className="c progress-bar"
                      id="2"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
