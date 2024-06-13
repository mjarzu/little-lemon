import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "../assets/styles/Header.css";

function Header() {
  const scrollTo = (section) => {
    const aboutElement = document.querySelector(section);
    aboutElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <Link
        to="/"
        className="header-img"
        onClick={() => scrollTo("#callToAction")}
      >
        <img src={logo} alt="Little Lemon logo" />
      </Link>
    </header>
  );
}

export default Header;