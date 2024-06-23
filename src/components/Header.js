import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import logo from "../assets/images/logo.svg";
import "../assets/styles/Header.css";


function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const showAllLinks = location.pathname === "/";

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="nav-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        display: "block",
        zIndex: 1,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <BurgerMenu />
      <div className="container">
        <nav>
          <ul>
            <li>  <Link to="/" onClick={() => scrollTo("#callToAction")}>
          <img src={logo} alt="Little Lemon logo" />
        </Link></li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  scrollTo("#callToAction");
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            {showAllLinks && (
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollTo("#testimonials");
                  }}
                >
                  Testimonials
                </Link>
              </li>
            )}
            {showAllLinks && (
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    scrollTo("#about");
                  }}
                >
                  About
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
