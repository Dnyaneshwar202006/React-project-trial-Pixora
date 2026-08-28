const SearchBar = ({ query, setQuery, onSearch }) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSearch(query);
    }
  return (
    <div>
      <div className="search-wrapper">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for images, videos, GIFs..."
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
    </div>
  )
}

export default SearchBar
