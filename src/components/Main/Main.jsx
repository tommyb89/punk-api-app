import "./Main.scss";
import React from "react";
import CardList from "./CardList/CardList";

const Main = (props) => {
  const { beers } = props;
  return (
    <main className="main">
      <h2>Main Section</h2>
      <CardList beers={beers} />
    </main>
  );
};

export default Main;
