import React from "react"
import Foods from "/home/gcamoin/Phase2-Project/my-app/src/components/Foods.js"

function FoodContainer({ onDeleteFood, foods}) {
   const foodComponents = foods.map((food) => (
        <Foods 
      key={food.id} 
      food={food}
      onDeleteFood={onDeleteFood}
      

      />
   ));

   return (
    <div className="plate">
        <h3>MENU</h3>
        {foodComponents}

    </div>
   )




}

export default FoodContainer