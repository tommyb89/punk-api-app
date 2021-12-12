import "./SearchBox.scss";
import React from "react";

const SearchBox = (props) => {
  const { handleInput } = props;
  return (
    <div className="search-container">
      <input
        className="search-container__input"
        type="text"
        placeholder="Type to search..."
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBox;
