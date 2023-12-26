
import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore? info:`${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="Card">
      <img src={image} className="img" alt={name} />
      <div className="tour-info">
        <div className="tours-details">
          <h4 className="tours-price">₹{price}</h4>
          <h4 className="tours-name">{name}</h4>
        </div>
        <div className="description">
          {readmore ? info : description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "Show less" : "Read more"}
          </span>
        </div>
      </div>
      <button className="btn-violet" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
