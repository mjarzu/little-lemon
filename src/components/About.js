import React from "react";
import image from "../assets/images/restaurant.jpg";
import "../assets/styles/About.css";

function About() {
  return (
    <div className="container">
      <div id="about" className="about">
        <div className="about-grid">
          <div className="about-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Welcome to Little Lemon Chicago! Located in the heart of the city,
              our restaurant offers a unique dining experience that combines
              delicious food with a cozy atmosphere. Our journey began over a
              decade ago when our founder, John Doe, set out to create a place
              where people could enjoy fresh, healthy meals made from
              locally-sourced ingredients. Since then, Little Lemon Chicago has
              become a beloved destination for food lovers from near and far.
              Whether you're craving a hearty breakfast, a satisfying lunch, or
              a delightful dinner, we have something for everyone. Join us at
              Little Lemon Chicago and experience the taste of excellence!
            </p>
          </div>
          <div className="about-right">
            <img src={image} alt="Little Lemon Restaurant" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
