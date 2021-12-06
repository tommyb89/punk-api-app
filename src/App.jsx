import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

const App = () => {
  const [beersArray, setBeersArray] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beersObject) => {
        console.log(beersObject);
        setBeersArray(beersObject);
      });
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
