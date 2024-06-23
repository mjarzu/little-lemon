import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for the additional matchers like toBeInTheDocument
import TestimonialsCard from "../components/TestimonialsCard";


describe("TestimonialsCard", () => {
  const props = {
    name: "John Doe",
    stars: 5,
    comment: "This is a great service!",
    photo: "https://via.placeholder.com/150",
  };

  test("renders name, comment, and photo", () => {
    render(<TestimonialsCard {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.comment)).toBeInTheDocument();
    expect(screen.getByAltText("Testimonial person")).toHaveAttribute(
      "src",
      props.photo
    );
  });
});
