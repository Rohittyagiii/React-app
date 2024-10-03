import './App.css';
 import React from 'react'

function App() {
  const IPL = ["CSK","MI","RCB"]
  const result = IPL.map((ipl)=><h1>{ipl}</h1>)

  return (
    <div className='app'>
      <h1>{result}</h1>
    </div>
  )
}
   

export default App;