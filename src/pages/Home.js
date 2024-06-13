import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
function Homepage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
