import "./NavBar.scss";
import React from "react";
import logo from "../../assets/images/Brewdog_logo.png";

import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = (props) => {
  const { handleInput, handleClassic, handleHighAbv, handleAcidic } = props;

  return (
    <nav className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt={"Brewdog Logo"} />
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchbox">
          <h2 className="sidebar__heading">Search Beers</h2>
          <SearchBox name={"Beers"} handleInput={handleInput} />
        </div>
        <div className="sidebar__filters">
          <h3 className="sidebar__heading">Filter Beers</h3>
          <FiltersList
            handleClassic={handleClassic}
            handleHighAbv={handleHighAbv}
            handleAcidic={handleAcidic}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
