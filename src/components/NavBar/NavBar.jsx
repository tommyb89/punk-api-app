import "./NavBar.scss";
import React from "react";
import logo from "../../assets/images/Brewdog_logo.png";

import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = (props) => {
  const { searchTerm, handleInput, filterBeers } = props;
  return (
    <nav className="sideNav">
      <img className="sideNav__logo" src={logo} alt="Brewdog Logo" />
      <h2>Search Beers</h2>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FiltersList filterBeers={filterBeers} />
    </nav>
  );
};

export default NavBar;
