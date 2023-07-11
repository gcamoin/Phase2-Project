import React, { useState, useEffect } from "react";

function Foods({food}) {
    const {deliverytime, name, image, price} = food

return (
    <div className="food">
        {<img src={image} alt={name} />}
        <h1 className="food-details">
            {name} - ${price}
            
        </h1>
        <p>{deliverytime} minutes</p>
    </div>
)



}

export default Foods