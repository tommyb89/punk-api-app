import "./NavBar.scss";
import logo from "../../assets/images/Brewdog_logo.png";

import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = (props) => {
  return (
    <nav className="sideNav">
      <img className="sideNav__logo" src={logo} alt="Brewdog Logo" />
      <h2>Search Beers</h2>
      <SearchBox />
      <FiltersList />
    </nav>
  );
};

export default NavBar;
