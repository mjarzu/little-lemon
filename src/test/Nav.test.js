import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import Nav from "../components/Nav";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("Nav component", () => {
  test("should render the component and show all links on home page", () => {
    useLocation.mockReturnValue({ pathname: "/" });

    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Booking/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Testimonials/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
  });

  test("should render the component and hide certain links on non-home pages", () => {
    useLocation.mockReturnValue({ pathname: "/booking" });

    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Booking/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /Testimonials/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /About/i })
    ).not.toBeInTheDocument();
  });
});
