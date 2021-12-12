import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, info, srcURL, abv, ibu, yearBrewed, tag, pH } = props;

  return (
    <div class="card">
      <div class="card__inner">
        <div class="card__front">
          <img className="card__front-img" src={srcURL} alt="Avatar" />
          <div className="card__front-info">
            <h3 className="card__front-heading">{name}</h3>
            <div className="card__front-extra">
              <p>ABV: {abv}%</p>
              <p>First Brewed: {yearBrewed}</p>
              <p>IBU: {ibu}</p>
              <p>pH: {pH}</p>
            </div>
          </div>
        </div>

        <div class="card__back">
          <h3 className="card__back-heading">{tag}</h3>
          <p className="card__back-tagline">Architect & Engineer</p>
          <p className="card__back-description">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
// "beer-card__description-text"
