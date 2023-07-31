import React, {useEffect, useState } from "react";
import FoodContainer from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodContainer.js"
import Header from "/home/gcamoin/Phase2-Project/my-app/src/components/Header.js"
import FoodRequestForm from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodRequestForm.js"
import NavBar from "/home/gcamoin/Phase2-Project/my-app/src/components/NavBar.js"




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
    
    
      
    
  

  return(
    <div className='app'>
    <Header />
    <NavBar />

    <FoodRequestForm  onAddFood={handleAddFood}/>
    <FoodContainer 
      
      onDeleteFood={handleDeleteFood}
      foods={foods}
      onUpdateFood={handleUpdateFood}
    
    />
{/* 
    <BrowserRouter>
      <Routes>
        <Route path="/home/gcamoin/Phase2-Project/my-app/src/components/About.js" element={<About />} />
      </Routes>
    </BrowserRouter> */}
    
    
    
   
    </div>
  )
  
}

export default App;



