import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

// import beersData from "./data/beers";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSeachTerm] = useState("");

  const handleInput = (e) => setSeachTerm(e.target.value.toLowerCase());

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beersObject) => {
        console.log(beersObject);
        setBeers(beersObject);
      });
  }, []);

  return (
    <div className="app">
      <NavBar handleInput={handleInput} searchTerm={searchTerm} />
      <Main beers={beers} />
    </div>
  );
};

export default App;
