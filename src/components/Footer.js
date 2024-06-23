import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-square.png";
import "../assets/styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  return (   
        <footer className="footer-bg">
          <div className="footer-grid">
            <div>
              <img src={logo} alt="Lemon logo square" />
            </div>
            <div>
              <h2 className="footer-header">Navigation</h2>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#callToAction");
                    }}
                  >
                    <p>Home</p>
                  </Link>
                </li>
                <li
                  onClick={() => {
                    scrollTo("#booking");
                  }}
                >
                  <Link to="/booking">
                    <p>Booking</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      scrollTo("#testimonials");
                    }}
                  >
                    <p>Testimonials</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-header">Contact</h2>
              <ul>
                <li>
                  <address>
                    Little Lemon <br />
                    331 E Chicago <br />
                    LaSalle Street Chicago,
                    <br />
                    Illinois 60602 USA
                  </address>
                </li>
                <br />
                <li>
                  {" "}
                  <a
                    href="tel:+551199999999"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    +55 11 9999-9999
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    href="mailto:contact@littlelemon.com"
                    target="_blank"
                    rel="external noreferrer"
                  >
                    contact@littlelemon.com
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-header">Social media</h2>
              <ul>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="insta-icon"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faCamera}
                      size={"sm"}
                      color={"#f4ce14"}
                    />{" "}
                    <p style={{ paddingLeft: "5px" }}> Instagram</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
  );
}

export default Footer;
