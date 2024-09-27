import './App.css';
import React, { useMemo, useState } from 'react';

function App() {

  const [add,setAdd] = useState(0);
  const [subtract,setSubtract] = useState(100);

   const Multiplication = useMemo( function multiply(){
    console.log("***********");
    return add*10;
  },[add])
   return(
    <div className='App'>
      <h1>Learning useMemo</h1>
      {Multiplication} <br/>
      <button onClick={()=>{setAdd(add + 1)}}>Addition</button>
      <span>{add}</span> <br  />
      <button onClick={()=>{setSubtract(subtract - 1)}}>Subtraction</button>
      <span>{subtract}</span>
    </div>
   ) ;  
}

export default App;