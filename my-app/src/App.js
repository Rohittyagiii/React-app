import './App.css';
import React, { useCallback, useState } from 'react';
import ChildA from './ChildA';

function App() {
  const [add,setAdd] = useState(0);
const [count,setCount] = useState(0);
  const Learning = useCallback(()=>{
    //some operation
  },[]);
   return(
    <div className='App'>
      <h1>Learning useCallback</h1>
      <h1>{add}</h1>
      <button  onClick={()=>{setAdd(add + 1)}}>Addition</button>
      <h1>{count}</h1>
      <button  onClick={()=>{setCount(count + 2)}}>Count</button>
    </div>
   ) ;  
  } 

export default App;