import "./SearchBox.scss";
import React from "react";
const SearchBox = (props) => {
  return (
    <>
      <input type="text" placeholder="Search by Name" />
      <input type="text" placeholder="Search by ABV" />
    </>
  );
};

export default SearchBox;
