import React from "react";
import "../assets/styles/Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";
import person1 from "../assets/images/persons/person1.jpeg";
import person2 from "../assets/images/persons/person2.jpeg";
import person3 from "../assets/images/persons/person3.jpeg";
import person4 from "../assets/images/persons/person4.jpeg";

const testimonialsData = [
  {
    name: "Maria Smith",
    photo: person1,
    stars: "5",
    comment:
      "An unforgettable dining experience! The food is always fresh and delicious.",
  },
  {
    name: "John Doe",
    photo: person2,
    stars: "5",
    comment:
      "The aroma of the dishes makes your mouth water even before tasting them.",
  },
  {
    name: "Emma Brown",
    photo: person3,
    stars: "4",
    comment: "Little Lemon is a delight to the eyes and the taste buds.",
  },
  {
    name: "James Green",
    photo: person4,
    stars: "5",
    comment:
      "Never fails to impress with their succulent and savory menu offerings.",
  },
];

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials-bg">
      <div className="container">
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialsCard
                key={index}
                name={testimonial.name}
                photo={testimonial.photo}
                stars={testimonial.stars}
                comment={testimonial.comment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
