import React from "react";
import SpecialCard from "./SpecialCard";
import "../assets/styles/Specials.css";

import greekSalad from "../assets/images/greekSalad.jpg";
import bruchetta from "../assets/images/bruschetta.jpeg";
import lemonDessert from "../assets/images/lemonDessert.jpg";

const specialsData = [
  {
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
    imgUrl: greekSalad,
  },
  {
    title: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "7.99",
    imgUrl: bruchetta,
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "6.99",
    imgUrl: lemonDessert,
  },
];

function Specials() {
  return (
    <div className="specials-bg">
      <div className="container">
        <div className="specials">
          <h1>This week's specials</h1>
          <div className="specials-grid">
            {specialsData.map((special, index) => (
              <SpecialCard
                key={index}
                title={special.title}
                description={special.description}
                price={special.price}
                imgUrl={special.imgUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
