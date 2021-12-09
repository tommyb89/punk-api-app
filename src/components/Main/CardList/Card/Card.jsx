import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, info, srcURL } = props;
  return (
    <div className="beer-card">
      <img className="beer-card__img" src={srcURL} alt="" />
      <h1 className="beer-card__name">{name}</h1>
      <p className="beer-card__description">{info}</p>
    </div>
  );
};

export default Card;
