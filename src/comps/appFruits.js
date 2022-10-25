import React, { useState } from 'react';
import FruitsList from './fruirsList';

function AppFruits(props){
  let [fruits_ar,setFruitsAr] = useState(["mango","apple","kiwi"])

  let [chooseFruit, setFruitChoose] = useState("");

  return(
    <div className="container">
      <h1>Fruits list</h1>
      <h2>Choosen Fruit: {chooseFruit}</h2>
      <FruitsList setFruitChoose={setFruitChoose} fruits_ar={fruits_ar} />

    </div> 
  )
}

export default AppFruits