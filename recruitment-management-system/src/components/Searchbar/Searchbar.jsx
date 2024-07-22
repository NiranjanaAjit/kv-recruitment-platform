import React from "react";
import { CiSearch } from "react-icons/ci";
import "./Searchbar.scss";

const Searchbar = ({ value }) => {
  return (
    <div class="wrapper">
      <div class="search-bar">
        <input
          className="search--input"
          type="text"
          name="search-query--input"
          placeholder="Search"
          value={value}
        />
        <button className="search--submit" type="submit">
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
