import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>City: Jagiroad Assam, 782411</p>
            </div>
            <div className="d-flex">
              <a href="tel:1234567890">+91 1234567890</a>
            </div>
            <div className="d-flex">
              <p>bikashbaishya362gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
                <br />
                <a className="footer-nav">Services</a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/bikash.baishya.5074"}
              >
                <FacebookIcon className="mx-3" size={64} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.facebook.com/bikash.baishya.5074"}
              >
                <TwitterIcon className="mx-3" size={64} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"https://www.facebook.com/bikash.baishya.5074"}
              >
                <WhatsappIcon className="mx-3" size={64} />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={"https://www.facebook.com/bikash.baishya.5074"}
              >
                <LinkedinIcon className="mx-3" size={64} />
              </LinkedinShareButton>
              <br />
              <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()} | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
