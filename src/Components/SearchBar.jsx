import { useState } from "react";
import { submitFormData } from "../Services";
import { useDebounce } from '../Utils'

const SearchBar = ({ onSearchButtonClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 1000);

  const searchChangeHandler = (e) => {
    setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 1000)
  };

  const searchButtonClickHandler = () => {
    submitFormData(debouncedValue, onSearchButtonClick);
  };
  const searchButtonEnterHandler = (event) => {
    if (event.key === 'Enter') {
      submitFormData(debouncedValue, onSearchButtonClick);
    }
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
        onKeyDown={searchButtonEnterHandler}
      />
      <button className="searchbutton" onClick={searchButtonClickHandler}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
