import React, { useState } from "react";

function FoodRequestForm({onFoodSubmit}) {
    const [foodName, setFoodName] = useState("")
    const [foodImage, setFoodImage] = useState("")

    function handleFoodSubmit(e) {
        e.preventDefault();

        const food = {
            foodName: foodName, 
            image: foodImage
        };

        fetch("http://localhost:3000/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(food),
        })
                .then((res) => res.json())
                .then((data) => {
                    onFoodSubmit(data)
                })
    }

    return (
        <div className="food-request-form">
          <h2>Food Request</h2>
          <form onSubmit={handleFoodSubmit}>
            <input
              onChange={(e) => setFoodName(e.target.value)}
              type="text"
              name="name"
              placeholder="Food Name"
              value={foodName}
            />
            <input
              onChange={(e) => setFoodImage(e.target.value)}
              type="text"
              name="image"
              placeholder="Image URL"
              value={foodImage}
            />
           
            <button type="submit">Request Food</button>
          </form>
        </div>
      );





}


export default FoodRequestForm