import React from "react"

function Search({searchInput, setSearchInput}) {
    return (
        <div className="searchbar">
            <button htmlFor="search">Find Food</button>
            <input
                value={searchInput}
                type="text"
                id="search"
                onChange={(e) => setSearchInput(e.target.value)}
            
            />
        </div>


    )









}

export default Search;