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

  // Handlers
  // Function that catches input from search box
  const handleInput = (e) => {
    const filteredInput = e.target.value.toLowerCase();
    setSeachTerm(filteredInput);
  };
  // Handle checkboxes
  const handleHighAbv = (e) => setIsHighAbv(e.target.checked);
  const handleClassic = (e) => setIsClassic(e.target.checked);
  const handleAcidic = (e) => setIsAcidic(e.target.checked);

  const fetchBeers = () => {
    const beerName = searchTerm ? `&beer_name=${searchTerm}` : "";
    const classic = isClassic ? `&brewed_before=01-2011` : "";
    const highAbv = isHighAbv ? `&abv_gt=6` : "";

    const URL = `https://api.punkapi.com/v2/beers?per_page=80${beerName}${classic}${highAbv}`;

    return fetch(URL)
      .then((res) => res.json())
      .then((beersObj) => setBeers(beersObj));
  };

  const filterAcidic = () => {
    if (isAcidic) {
      fetch(URL)
        .then((res) => res.json())
        .then((beersObj) => setBeers(beersObj.filter((beer) => beer.ph < 4)));
    }
  };

  useEffect(() => {
    filterAcidic();
  }, [isAcidic]);

  useEffect(() => {
    fetchBeers();
  }, [searchTerm, isClassic, isHighAbv]);

  return (
    <div className="app">
      <NavBar
        handleInput={handleInput}
        handleClassic={handleClassic}
        handleHighAbv={handleHighAbv}
        handleAcidic={handleAcidic}
      />
      {beers && <Main beers={beers} />}
    </div>
  );
};

export default App;
