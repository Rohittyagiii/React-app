import './App.css';
import  React, { useState } from 'react'; 
import { useRef } from 'react';


function App() {
  const refElement = useRef("");
  const [name,setName] = useState("Rohit")
  console.log(refElement);

  function Reset(){
    setName("")
    refElement.current.focus()
  }
   
function handleInput(){
  refElement.current.style.color="blue"
  refElement.current.value="Tyagi"
}

    return (
      <>
      <h1>Learning useRef</h1>
      <input ref={refElement} type='text' value={name} onChange={ (e)=> setName(e.target.value)} ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>Handle Event</button>
      </>
    )
}

export default App;
