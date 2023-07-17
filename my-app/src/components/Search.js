import React from "react"

function Search({searchInput}) {
    return (
        <div className="searchbar">
            <button htmlFor="search">Find Food</button>
            <input
                value={searchInput}
                type="text"
                id="search"
            
            />
        </div>


    )









}

export default Search;