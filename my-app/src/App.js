import './App.css';
import React, { useState } from 'react';

function App() {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
   function handleChange(e){
    // console.log(e.target.value);
    //  setName(e.target.value);
    // const capitalName = (e.target.value).toUpperCase();
    //  setName(capitalName);

    if(e.target.name == "firstName"){
      // console.log(e.target.name);  
      
      const capitalName = (e.target.value).toUpperCase();
      setName(capitalName);
    }
    else{
      setPassword(e.target.value)
    }

   }
   return(
     <>
     <form className='App'>
     <h1>HTML FORMS</h1>
      <label>First Name :</label><br/>
      <input type='text' name='firstName' value={name} onChange={handleChange}/> <br/> <br/>
      <label>Password :</label> <br/>
      <input type='text' name='password' value={password} onChange={handleChange}/> <br/> <br/>
      <button>Submit</button>
     </form>
     </>
   )   
  } 

export default App;