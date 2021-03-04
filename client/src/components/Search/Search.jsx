import './Search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <section className='search'>
      <form className="search-input">
      <i className="fa fa-search"></i>
            <input
                id="search-input"
                value='placeholder'
          name="Search"
                name="search"
                placeholder="Search City"
                type="text"
                autoFocus
            />
      </form>
      </section>
      </div>
    )
}

export default Search