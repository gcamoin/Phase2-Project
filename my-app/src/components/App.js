import React, {useEffect, useState } from "react";
import FoodContainer from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodContainer.js"
import Header from "/home/gcamoin/Phase2-Project/my-app/src/components/Header.js"
import FoodRequestForm from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodRequestForm.js"
import NavBar from "/home/gcamoin/Phase2-Project/my-app/src/components/NavBar.js"
import {Route, Routes} from "react-router-dom"
import About from "/home/gcamoin/Phase2-Project/my-app/src/components/About.js"




function App() {

  const [foods, setFoods] = useState([])
  

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
    
    
      
    
  

  return (
    <div className='app'>
    <Header />
    <NavBar />
    
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<FoodContainer foods={foods} onDeleteFood={handleDeleteFood} onUpdateFood={handleUpdateFood} />}/>
      <Route path="/requestfood" element={<FoodRequestForm  onAddFood={handleAddFood}/>} />
    </Routes>

  

    
    
    
   
    </div>
  )
  
}

export default App;



