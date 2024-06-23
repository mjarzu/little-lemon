import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/BurgerMenu.css";

const CustomBurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const showAllLinks = location.pathname === "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollTo = (section) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button onClick={toggleMenu} className="menu-button">
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      {menuOpen && (<div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            scrollTo("#callToAction");
          }}
          className="nav-item"
        >
          <span style={{ marginLeft: "20px" }}>Home</span>
        </Link>
        <Link
          to="/booking"
          onClick={() => {
            closeMenu();
            scrollTo("#booking");
          }}
          className="nav-item"
        >
          <span style={{ marginLeft: "20px" }}>Booking</span>
        </Link>
        {showAllLinks && (
          <Link
            to="#"
            onClick={() => {
              closeMenu();
              scrollTo("#testimonials");
            }}
            className="nav-item"
          >
            <span style={{ marginLeft: "20px" }}>Testimonials</span>
          </Link>
        )}
        {showAllLinks && (
          <Link
            to="#"
            onClick={() => {
              closeMenu();
              scrollTo("#about");
            }}
            className="nav-item"
          >
            <span style={{ marginLeft: "20px" }}>About</span>
          </Link>
        )}
      </div>)}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default CustomBurgerMenu;
