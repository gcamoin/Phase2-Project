import React from "react"
import Foods from "/home/gcamoin/Phase2-Project/my-app/src/components/Foods.js"

function FoodContainer({foods}) {
   const foodComponents = foods.map((food) => (
        <Foods key={food.id} food={food}/>
   ));

   return (
    <div className="plate">
        {foodComponents}

    </div>
   )




}

export default FoodContainer