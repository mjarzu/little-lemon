import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import { MemoryRouter } from "react-router-dom";

describe("Hero Component", () => {
  it("should render the component", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });
});
