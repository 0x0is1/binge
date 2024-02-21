import React, { useEffect, useState } from "react";
import APIFetch from "../../utils/APIFetch";
import Category from "../../components/Category/Category";
import "./Search.css";

const Search = () => {
  const [resp, setResp] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [timer, setTimer] = useState(null);
  const [typeidx, setTypeidx] = useState(0);
  const fetcher = new APIFetch();

  const searchData = async (query) => {
    const fun = [fetcher.search_movie, fetcher.search_tv][typeidx];
    const data = await fun(query, 1);
    setResp(data);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        searchData(searchQuery);
      }, 500);
      setTimer(newTimer);
    }
  }, [searchQuery, typeidx]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== "") {
      searchData(searchQuery, 1);
    }
  };

  return (
    <div id="main" className="search-area">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie, tv series ..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      <div className="filter-box">
        <div
          className={"playlists" + (typeidx === 0 ? " active" : "")}
          onClick={() => setTypeidx(0)}
        >
          Movies
        </div>
        <div
          className={"songs" + (typeidx === 1 ? " active" : "")}
          onClick={() => setTypeidx(1)}
        >
          Tv Series
        </div>
      </div>
      {searchQuery.length < 1 ? (
        null
        ) : (
        <div className="search">
          <Category name={["Movies", "TV Series"][typeidx]} data={resp.results} type={["movie", "series"][typeidx]}/>
        </div>
      )}
    </div>
  );
};

export default Search;
