import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer component", () => {
  test("renders the logo", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByAltText(/Lemon logo square/i)).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const homeLink = screen.getByText("Home");
    const bookingLink = screen.getByText("Booking");
    const testimonialsLink = screen.getByText("Testimonials");

    expect(homeLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
    expect(testimonialsLink).toBeInTheDocument();
  });

  test("renders contact information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const addressElement = screen.getByText(/331 E Chicago/i);
    const phoneElement = screen.getByText("+55 11 9999-9999");
    const emailElement = screen.getByText("contact@littlelemon.com");

    expect(addressElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  test("renders social media link", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const instagramLink = screen.getByText("Instagram");

    expect(instagramLink).toBeInTheDocument();
  });
});
