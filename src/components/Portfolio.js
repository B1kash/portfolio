import React from "react";
import todo from "../images/todo.JPG";
import res from "../images/res.JPG";
import shop from "../images/shop.JPG";
import job from "../images/job.JPG";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";

//Icons
import { FaSearchengin } from "react-icons/fa";
//React Popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Todo List
  const openPopupboxTodoList = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={todo}
          alt="Todo List Project..."
        />
        <p>Todo List Project.</p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/B1kash/Todo_List")}
        >
          https://github.com/B1kash/Todo_List
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfig1Todolist = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Resturent(res)
  const openPopupboxResturent = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={res}
          alt="Resturent Website Project..."
        />
        <p>Resturent website Project.</p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/B1kash/greenleafrestro")
          }
        >
          https://github.com/B1kash/greenleafrestro
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigResturent = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Online Shop
  const openPopupboxOnlineShop = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={shop}
          alt="Online Shop Project..."
        />
        <p>Shopping site Project.</p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/B1kash/shoppingsite")}
        >
          https://github.com/B1kash/shoppingsite
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigOnlineShop = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //Job Application
  const openPopupboxJobApp = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={job}
          alt="Job Application Project..."
        />
        <p>Job Application Project.</p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/B1kash/Registration-form")
          }
        >
          https://github.com/B1kash/Registration-form
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigJobApp = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    //https://github.com/B1kash/Todo_List
    <div id="Portfolio" className="portfolio-wrapper">
      <div className="container">
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <h1 className="text-uppercase text-center py-5">portfolio</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="image-box-wrapper row row-cols-auto justify-content-center">
            <div className="portfolio-image-box" onClick={openPopupboxTodoList}>
              <img
                className="portfolio-image"
                src={todo}
                alt="Todo List....."
              />
              <div className="overflow"></div>
              <FaSearchengin className="portfolio-icon" />
            </div>

            {/* - */}
            <div
              className="portfolio-image-box"
              onClick={openPopupboxResturent}
            >
              <img
                className="portfolio-image"
                src={res}
                alt="Resturent website..."
              />
              <div className="overflow"></div>
              <FaSearchengin className="portfolio-icon" />
            </div>
            {/* - */}
            <div
              className="portfolio-image-box"
              onClick={openPopupboxOnlineShop}
            >
              <img
                className="portfolio-image"
                src={shop}
                alt="Online Shopping Site..."
              />
              <div className="overflow"></div>
              <FaSearchengin className="portfolio-icon" />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxJobApp}>
              <img
                className="portfolio-image"
                src={job}
                alt="Job Application..."
              />
              <div className="overflow"></div>
              <FaSearchengin className="portfolio-icon" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <PopupboxContainer {...popupboxConfig1Todolist} />
      <PopupboxContainer {...popupboxConfigResturent} />
      <PopupboxContainer {...popupboxConfigOnlineShop} />
      <PopupboxContainer {...popupboxConfigJobApp} />
    </div>
  );
};

export default Portfolio;
