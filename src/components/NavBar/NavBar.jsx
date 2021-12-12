import "./NavBar.scss";
import React from "react";
import logo from "../../assets/images/Brewdog_logo.png";

import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = (props) => {
  const { handleInput, handleClassic, handleHighAbv } = props;

  return (
    <nav className="sidebar">
      <img className="sidebar__logo" src={logo} alt="Brewdog Logo" />
      <h2 className="sidebar__heading">Search Beers</h2>
      <SearchBox name={"Beers"} handleInput={handleInput} />
      <div className="sidebar__filters">
        <FiltersList
          handleClassic={handleClassic}
          handleHighAbv={handleHighAbv}
        />
      </div>
    </nav>
  );
};

export default NavBar;
