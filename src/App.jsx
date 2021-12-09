import "./App.scss";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

// import beersData from "./data/beers";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSeachTerm] = useState("");

  const [isClassic, setIsClassic] = useState(false);
  const [isAcidic, setIsAcidic] = useState(false);
  const [isHighAbv, setIsHighAbv] = useState(false);

  const handleInput = (e) => setSeachTerm(e.target.value.toLowerCase());

  const filterBeers = () => {
    const beerName = searchTerm ? `&beer_name=${searchTerm}` : "";
    const classic = isClassic ? `&brewed_before=01-2011` : "";
    const highAbv = isHighAbv ? `&abv_gt=6` : "";
    const acidic = isAcidic ? `&ibu_it=4.4` : "";

    const URL = `https://api.punkapi.com/v2/beers?per_page=50${beerName}${acidic}${highAbv}${classic}`;
    return fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((beersObject) => {
        console.log(beersObject);
        setBeers(beersObject);
      });
  };

  useEffect(() => {
    filterBeers();
  }, [searchTerm, isAcidic, isClassic, isHighAbv]);
  // [

  return (
    <div className="app">
      <NavBar
        handleInput={handleInput}
        searchTerm={searchTerm}
        filterBeers={filterBeers}
      />
      <Main beers={beers} />
    </div>
  );
};

export default App;
