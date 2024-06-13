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
        <main>
          <div id="callToAction" className="hero-content">
            <div className="hero-left">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod condimentum ante finibus consequat. Donec
                Mauris accumsan tellus mi, vitae rutrum felis scelerisque at.{" "}
              </p>
              <button onClick={handleSubmit} aria-label="Reserve a table">
                Reserve a table
              </button>
            </div>
            <div className="hero-right">
              <img src={image} alt="Restaurant food" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
