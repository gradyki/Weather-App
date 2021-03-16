import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/detail/${search}`);
  };

  return (
    <div className="search-container">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Search City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-button">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Search;
