import React from "react";

function Foods({ onDeleteFood, food, onUpdateFood}) {
    const {id, name, image, deliverytime, price, likes} = food;
   
    function handleDeleteFood() {
        fetch(`http://localhost:3000/foods/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then((data) => {
                onDeleteFood(food)
            });
    }

    function handleLikeClick() {
        const updateLike = {
            likes: food.likes + 1
        }

        fetch(`http://localhost:3000/foods/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateLike),
        })
                .then((r) => r.json())
                .then(onUpdateFood)
    }

return (
    
    <div className="food">
        <h1 className="food-details">
            {name} 
            
        </h1>
        {<img src={image} alt={name} />}
        <button className= 'like-btn' onClick={handleLikeClick}>Like {likes}</button>
        
        <p>Delivery Time: {deliverytime} minutes</p>
        <button><label>${price}</label> - Add To Cart</button>
        <button className= 'delete-btn' onClick={handleDeleteFood}> Remove From Menu</button>
    </div>
)



}

export default Foods;