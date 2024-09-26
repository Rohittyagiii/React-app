import './App.css';
import React from 'react';
import ChildA from './ChildA';

function App() {
   const name ="Rohit"
  return (
    <>
    <ChildA name={name}/>
    </>
  );
}

export default App;
