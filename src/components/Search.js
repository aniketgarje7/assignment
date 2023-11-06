import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = ({ setData }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = () => {
    console.log("check");
    const APIKEY = "840de593b7028de6e424162454790fe5";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${APIKEY}`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message, "error in fetch"));
  };
  return (
    <div className="search_bar">
      <input type="text" onChange={handleChange} value={query} className="search_input" placeholder="type to search" />
      <span className="search_icon">
        <AiOutlineSearch className="ai_search" onClick={handleSearch} />
      </span>
    </div>
  );
};

export default Search;
