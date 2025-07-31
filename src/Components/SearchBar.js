const SearchBar = ({ searchItem, setSearchItem }) => {
    return (
        <div className="SearchBar" style={{ background: "transparent" }}>
            <div className="relative inline-block">
                <img
                    src="search.png"
                    alt="Search Icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ background: "transparent" }}
                />
            </div>
        </div>
    );
};
export default SearchBar;
