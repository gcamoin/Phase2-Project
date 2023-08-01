import React from "react"
import {Link} from "react-router-dom"

    const NavBar = () => {
        return (
            <nav className="nav">
                <Link to="/">Menu</Link><br />
                <Link to="/requestfood">Request Food</Link><br />
                <Link to="/about">About</Link>
            
            </nav>
        )
    }




export default NavBar;