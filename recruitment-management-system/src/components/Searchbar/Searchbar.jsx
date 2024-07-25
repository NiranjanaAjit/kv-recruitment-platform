import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Searchbar.scss";

const Searchbar = ({ value, onSubmit,onChange }) => {
  return (
    <div className="wrapper">
      <div className="search-bar">
        <input
          className="search--input"
          type="text"
          name="search-query--input"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <button
          className="search--submit"
          type="submit"
          onClick={onSubmit}
        >
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
