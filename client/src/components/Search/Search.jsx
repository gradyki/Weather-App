import "./Search.css";
import axios from "axios";
import { useState } from "react";
import { forecastURL } from "../../services/index";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [forecast, setForcast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const field = {
      search,
    };
    const resp = await axios.get(`${forecastURL},${search}`);
    setForcast(resp);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Search;
