import React from "react";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

const Header = () => {
  return (
    <div id="Home" className="header-wraper">
      <div className="main-info">
        <Jump top>
          <h1>Hey! </h1>
        </Jump>
        <Fade left>
          <h2>I'm Bikash Baishya</h2>
        </Fade>
        <Typed
          className="typed-text"
          strings={["Web Designer", "Web Developer", "Java Programmer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <a href="#" className="btn-main-offer">
          Contact Me
        </a> */}
        <br></br>
        <br></br>
        <a href="https://linktr.ee/Bikash_Baishya">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
