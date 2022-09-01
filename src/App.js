
import React, {   useState,  } from 'react';
import './App.css';

function App() {
  const [count,  effat, ] = useState(0);

  const incNum = () => {
    if (count< 100) {
      effat(count +1)
    }
  }

  const decNum = () => {
      if (count > 0){
        effat(count -1)
      }
  }
 
  return (
    <div className="App">
      <div className="App-co">
        
       <p>{count}</p>
       <button className='btn' onClick={incNum}>Click +</button>
       <button className='btn' onClick={ decNum}>Click -</button>
       <button className='btn'type='reset' onClick={
        () => effat(0)
       } >Reset</button>
       </div>
    </div>
  );
}
export default App;
