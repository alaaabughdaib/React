import React from "react";
import FooterImg from "../../Assets/images/logos/footer-logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="pd white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/booking">
              Booking
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              Nablus
              <br />
              Rafidiya Street
            </address>
            <a className="footer-block" href="tel:+970 599 555 222">
              0599 555 222
            </a>
            <br />
            <a className="footer-block" href="mailto: alaaabughdaib11@gmail.com">
              alaaabughdaib11@gmail.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2024 Coursera Meta Front-End, Developed by Ala'a Abu Ghdaib</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
