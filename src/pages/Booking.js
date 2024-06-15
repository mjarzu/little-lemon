import React from "react";
import BookingForm from "../components/BookingForm";

import "../assets/styles/Booking.css";

function Reservation() {
  return (
    <div className="booking">
      <div>
        <h1>Reserve a table</h1>
      </div>
      <BookingForm />
    </div>
  );
}

export default Reservation;
