import React, { useEffect } from "react";
import BookingForm from "../components/BookingForm";
import useApi from "../utils/API";

import "../assets/styles/Booking.css";

const BookingPage = () => {
  const { state: availableTimesState, dispatch } = useApi();

  useEffect(() => {
    const currentDate = new Date();
    dispatch({ type: "UPDATE_AVAILABLE_TIMES", payload: currentDate });
  }, [dispatch]);

  return (
    <div className="booking">
      <div>
        <h1>Reserve a table</h1>
      </div>
      <BookingForm availableTimes={availableTimesState.availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
