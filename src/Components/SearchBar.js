import { useState } from "react";
import oAuthToken from "../Misc";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchButtonClickHandler = () => {
    fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`, {
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Authorization': `Bearer ${oAuthToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.onSearchButtonClick(
          data.artists.items.filter(
            (item) =>
              item.hasOwnProperty("images") &&
              item.images.length !== 0 &&
              item.hasOwnProperty("genres") &&
              item.hasOwnProperty("name") &&
              item.hasOwnProperty("followers")
          )
        );
      });
  };

  const addSearchClickHandler = (e) => {
    e.target.value = '';
  }

  return (
    <div className="searchbar">
      <input
        type="search"
        placeholder="search for artists"
        className="search"
        onChange={searchChangeHandler}
        onClick={addSearchClickHandler}
      />
      <button className="searchbutton" onClick={searchButtonClickHandler}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
