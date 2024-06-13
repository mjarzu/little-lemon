import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/booking" element={<Booking />} />
        <Route path="/booking/confirmed" element={<BookingConfirmation />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
