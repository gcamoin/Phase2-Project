import React, { useState } from "react";

function FoodRequestForm({onAddFood}) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        deliverytime: Math.floor(Math.random() * 70),
        price: Math.floor(Math.random() * 15)
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    

    function handleFoodSubmit(e) {
        e.preventDefault();

       

        fetch("http://localhost:3000/foods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
                .then((res) => res.json())
                .then(onAddFood)
                    
                
    }

    return (
        <div className="food-request-form">
          <h2>Food Request</h2>
          <form onSubmit={handleFoodSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Food Name"
              value={formData.name}
            />
            <input
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
            />
           
            <button type="submit">Request Food</button>
          </form>
        </div>
      );





}


export default FoodRequestForm