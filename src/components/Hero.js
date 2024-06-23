import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/restauranfood.jpg";
import "../assets/styles/Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking");
  };

  useEffect(() => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="hero-bg">
      <div className="container">
        <div id="callToAction" className="hero-content">
          <div className="hero-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button onClick={handleSubmit} aria-label="Reserve a table">
              Reserve a table
            </button>
          </div>
          <div className="hero-right">
            <img src={image} alt="Restaurant food" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
