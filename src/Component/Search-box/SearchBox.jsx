import React from "react"
import "./SearchBox.css"

const SearchBox = ({ placeholder , handleChange}) => (
    <div >
        <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
    </div>
)

export default SearchBox