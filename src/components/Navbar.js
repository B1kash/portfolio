// import React from "react";
// import { useState } from "react";
import React from "react";
import { Link } from "react-scroll";
import gif from "../BB.png";
import insta from "../4.png";
import git from "../5.png";
import { useState } from "react";

//fontawosome imports
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const hideMenu = document.getElementById("navbarSupportedContent");
    hideMenu.classList.remove("show");
    const handleToggler = document.getElementById("toggler");
    handleToggler.classList.add("collapsed");
  };

  const handleState = (e) => {
    e.preventDefault();
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="gif" src={gif} alt="shga" />
        </a>
        {/* <a
          className="navbar-brand"
          href="https://www.instagram.com/quick_._silver/"
        >
          <img src={insta} alt="shga" />
        </a>
        <a className="navbar-brand" href="https://github.com/B1kash">
          <img src={git} alt="shga" />
        </a> */}
        <button
          className="navbar-toggler"
          id="toggler"
          onClick={handleState}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sd">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                smooth={true}
                to="Home"
                className="nav-link "
                onClick={handleClick}
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>

            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="About"
                offset={-110}
                className="nav-link"
                onClick={handleClick}
                href="#"
              >
                About Me
              </Link>
            </li>

            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="Education"
                offset={-125}
                className="nav-link"
                onClick={handleClick}
                href="#"
              >
                Education
              </Link>
            </li>
            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="skills"
                offset={-125}
                className="nav-link"
                onClick={handleClick}
                href="#"
              >
                Skills
              </Link>
            </li>

            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="Portfolio"
                offset={-120}
                className="nav-link"
                onClick={handleClick}
                href="#"
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="Contacts"
                offset={-90}
                className="nav-link"
                onClick={handleClick}
                href="#"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
