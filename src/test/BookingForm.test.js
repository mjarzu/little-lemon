import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";

import { MemoryRouter } from "react-router-dom";

describe("BookingForm", () => {
  test("renders BookingForm component", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    // Verify that all form elements are rendered
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Additional information/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Reserve a table/i })
    ).toBeInTheDocument();
  });

  test("displays validation errors for invalid form submission", async () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("button", { name: /Reserve a table/i }));

    expect(await screen.findByText(/Please Select a time/)).toBeInTheDocument();
  });
});
