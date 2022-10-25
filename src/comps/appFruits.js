import React, { useState } from 'react';
import {configureStore} from "redux"
import {Provider} from "react-redux"
import FruitsList from './fruirsList';

function AppFruits(props){
  let [fruits_ar,setFruitsAr] = useState(["mango","apple","kiwi","banana"])

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