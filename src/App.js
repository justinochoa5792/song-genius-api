import Axios from "axios";
import React, { useState } from "react";
import SongList from "./SongList";

const App = () => {
  const [searched, setSearched] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setSearched(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await Axios.get(
      `https://genius.p.rapidapi.com/search?q=${searched}`,
      {
        headers: {
          "X-RapidAPI-Host": "genius.p.rapidapi.com",
          "X-RapidAPI-Key":
            "dd93223963msh0d79becd651c7bap1a76e9jsn121f11a867d1",
        },
      }
    );
    setList(result.data.response.hits);
  };

  return (
    <div className="container">
      <h1>Search Songs</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleChange}
          />
        </div>
      </form>
      <SongList list={list} />
    </div>
  );
};

export default App;
