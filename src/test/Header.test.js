import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header component", () => {
  it("should render the component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("link", { name: /Little Lemon logo/i })
    ).toBeInTheDocument();
  });
});
