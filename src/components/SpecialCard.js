import React from "react";
import "../assets/styles/SpecialCard.css";

function SpecialCard({ imgUrl, title, price, description }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={title} />
      <div className="card-content">
        <div className="card-title">
          <h4>{title}</h4>
          <p className="price">${price}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SpecialCard;
