import React, {useEffect, useState } from "react";
import FoodContainer from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodContainer.js"
import Header from "/home/gcamoin/Phase2-Project/my-app/src/components/Header.js"
import FoodRequestForm from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodRequestForm.js"




function App() {

  const [foods, setFoods] = useState([])
  const [searchInput, setSearchInput] = useState("")
 
  

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then(res => {
       return res.json()
      })
        .then(data => {
          console.log(data);
          setFoods(data)

        })      
  }, []);

  // const searchResults = foods.filter((food) => {
  //   if (searchInput === "") return true

  //   return food.name

 
  // })

    function handleAddFood(newFood) {
      setFoods([...foods, newFood])
    }

    function handleDeleteFood(foodToDelete) {
      const updatedMenu = foods.filter((food) => food.id !== foodToDelete.id)
      setFoods(updatedMenu)
      };

    function handleUpdateFood(updatedFood) {
      const updatedFoods = foods.map((food) =>
        food.id === updatedFood.id ? updatedFood : food
      );
      setFoods(updatedFoods)
    }
    
    
      
    
  

  return(
    <div className='app'>
    <Header
      searchInput={searchInput}
      setSearchInput={setSearchInput}
    />
    <FoodRequestForm  onAddFood={handleAddFood}/>
    <FoodContainer 
      // searchResults={searchResults}
      onDeleteFood={handleDeleteFood}
      foods={foods}
      onUpdateFood={handleUpdateFood}
    
    />
    
   
    </div>
  )
  
}

export default App;



