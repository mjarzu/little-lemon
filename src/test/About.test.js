import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../components/About";

describe("About component", () => {
  test("renders the component and displays the correct content", () => {
    render(<About />);
    expect(screen.getByRole("heading", {
        name: /Little Lemon/i,
      })).toBeInTheDocument();

    expect(screen.getByText(
      /Welcome to Little Lemon Chicago!/i
    )).toBeInTheDocument();

    expect(screen.getByAltText(/Little Lemon Restaurant/i)).toBeInTheDocument();

  });
});
