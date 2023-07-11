import React, {useEffect, useState } from "react";
import FoodContainer from "/home/gcamoin/Phase2-Project/my-app/src/components/FoodContainer.js"
import Header from "/home/gcamoin/Phase2-Project/my-app/src/components/Header.js"
// import Search from "/home/gcamoin/Phase2-Project/my-app/src/components/Search.js"


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


  

  return(
    <div className='app'>
    <Header />
    <FoodContainer foods={foods} />
    
   
    </div>
  )
  
}

export default App;



