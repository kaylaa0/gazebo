const SearchBar = () => (
    <form className="SearchBarForm" action="/" method="get">
        <label htmlFor="header-search">
            <span className="SearchBarIcon">search</span>
        </label>
        <input
            className="SearchBar"
            type="text"
            id="header-search"
            placeholder="Search for Communities"
            name="s"
        />
    </form>
);

export default SearchBar;
