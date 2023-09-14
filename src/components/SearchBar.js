const SearchBar = () => (
    <form className="CSearchBarForm" action="/" method="get">
        <input
            className="CSearchBar"
            type="text"
            id="header-search"
            placeholder="Search for Communities"
            name="s"
        />
    </form>
);

export default SearchBar;
