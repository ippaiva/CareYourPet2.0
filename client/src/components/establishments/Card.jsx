import React from "react";

const Card = props => {
  return (
    <div className="cardContainer">
      <div>
        <h1 className="title is-5">{props.establishmentName}</h1>
        <p>{props.type}</p>
        <p>{props.services}</p>
        <p>{props.workingHour}</p>
        <a href="https://www.kcsp.com.br">Visit Us</a>
      </div>
    </div>
  );
};

export default Card;
