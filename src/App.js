
import React, {   useState,  } from 'react';
import './App.css';

function App() {
  const [count,  effat, ] = useState(0);
 
 

  
  return (
    <div className="App">
      <div className="App-co">
       <p>{count}</p>
       <button className='btn' onClick={
        () => effat (count +1)
       }>Click +</button>
       <button className='btn' onClick={
        () => effat (count -1)
       }>Click -</button>

       <button className='btn'type='reset' onClick={
        () => effat(0)
       } >Reset</button>
       </div>
    </div>
  );
}

export default App;
