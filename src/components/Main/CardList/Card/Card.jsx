import React from "react";
import "./Card.scss";

const Card = (props) => {
  const {
    name,
    info,
    srcURL,
    abv,
    ibu,
    yearBrewed,
    tag,
    pH,
    abvText,
    firstBrewedText,
    phText,
    ibuText,
  } = props;

  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__front">
          <img className="card__front-img" src={srcURL} alt="Avatar" />
          <div className="card__front-info">
            <h3 className="card__front-heading">{name}</h3>
            <div className="card__front-extra">
              <p>
                <span>{abvText}</span>
                {abv}%
              </p>
              <p>
                <span>{firstBrewedText}</span>
                {yearBrewed}
              </p>
              <p>
                <span>{ibuText}</span>
                {ibu}
              </p>
              <p>
                <span>{phText}</span>
                {pH}
              </p>
            </div>
          </div>
        </div>

        <div className="card__back">
          <h3 className="card__back-heading">{tag}</h3>
          <p className="card__back-description">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
// "beer-card__description-text"
