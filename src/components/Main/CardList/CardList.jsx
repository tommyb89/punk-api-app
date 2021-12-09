import React from "react";
import "./CardList.scss";

import Card from "./Card/Card";

const CardList = (props) => {
  const { beers } = props;
  console.log(beers);
  return (
    <div className="beer-gallery">
      {beers.map((beer, index) => {
        return (
          <Card
            key={"name" + index}
            name={beer.name}
            info={beer.description}
            srcURL={beer.image_url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
