import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Specials />
        </section>
        <Testimonials />
        <section>
          <About />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
