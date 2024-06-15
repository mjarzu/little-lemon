import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/BookingConfirmation.css";

function BookingConfirmation() {
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");

    setLocalStorageData(storedData ? JSON.parse(storedData) : null);
  }, []);

  return (
    <div className="confirm-bg">
      <div className="container">
        <div className="confirm-page">
          {localStorageData && (
            <>
              <h1>Booking has been confirmed</h1>
              <p>Date: {localStorageData.date}</p>
              <p>Time: {localStorageData.time}</p>
              <p>Number of Guests: {localStorageData.guests}</p>
              <p>Occasion: {localStorageData.occasion}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
