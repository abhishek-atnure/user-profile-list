import React from "react";
import "./Card.css";

function Card({ fname, lname, cell, picture }) {
  return (
    <div className="card-main_div">
      <div className="card-details_div">
        <h2>
          Name:{" "}
          <p>
            {fname} {lname}
          </p>
        </h2>
        <span>
          Contact: <p>{cell}</p>
        </span>
      </div>
      <div className="card-photo_div">
        <img src={picture} alt={fname} />
      </div>
    </div>
  );
}

export default Card;
