import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
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
        <h4 style={{ marginTop: "1em" }}>
          Order a Delivery{" "}
          <FontAwesomeIcon
            icon={faTruck}
            size={"sm"}
            color="black"
            style={{ paddingLeft: "5px" }}
          />
        </h4>
      </div>
    </div>
  );
}

export default SpecialCard;
