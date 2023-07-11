import React from "react"

function Search({searchInput}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Find Food</label>
            <input
                value={searchInput}
                type="text"
                id="search"
            
            />
        </div>


    )









}

export default Search;