import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  test("render App component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Little Lemon Restaurant")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Little Lemon logo/i })
    ).toBeInTheDocument();
  });
});
