import React from "react"
import Foods from "/home/gcamoin/Phase2-Project/my-app/src/components/Foods.js"

function FoodContainer({ onDeleteFood, onUpdateFood, foods}) {
   const foodComponents = foods.map((food) => (
        <Foods 
      key={food.id} 
      food={food}
      onDeleteFood={onDeleteFood}
      onUpdateFood={onUpdateFood}
     
      

      />
   ));

   return (
    <div className="plate" style={{backgroundColor: "lightblue"}}>
        <h3>MENU</h3>
        {foodComponents}

    </div>
   )




}

export default FoodContainer