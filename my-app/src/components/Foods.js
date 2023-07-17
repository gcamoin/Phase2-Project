import React from "react";

function Foods({food}) {
    const {deliverytime, name, image, price} = food

return (
    
    <div className="food">
        <h1 className="food-details">
            {name} 
            
        </h1>
        {<img src={image} alt={name} />}
        
        <p>Delivery Time: {deliverytime} minutes</p>
        <button>Add To Cart </button>
    </div>
)



}

export default Foods;