import React from "react"
import Search from "/home/gcamoin/Phase2-Project/my-app/src/components/Search.js"


function Header({searchInput}) {
    return (
        <header>
            <h1>
                EATS EXPRESS
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcI264VJWX23QF5-V8lCFS1huFPvO5ly8gg&usqp=CAU" alt="food-icon"/>
                <Search searchInput={searchInput} />
            </h1>


        </header>
    )



}






export default Header
