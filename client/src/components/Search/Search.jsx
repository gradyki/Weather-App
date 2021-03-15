import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/detail/${search}`);
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
