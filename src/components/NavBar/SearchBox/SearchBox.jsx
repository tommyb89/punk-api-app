import "./SearchBox.scss";

const SearchBox = (props) => {
  return (
    <>
      <input type="text" placeholder="Search by Name" />
      <input type="text" placeholder="Search by ABV" />
    </>
  );
};

export default SearchBox;
