
import React, { useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [startWarrior, setStartWarrior] = useState([])
  
  console.log('App was loaded')
  useEffect( () => {
    console.log('useEffect was loaded')
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(resp => resp.json())
    .then(data => setStartWarrior(data))
  },[count])
     

  return (
    <div className="App">
      <div className='container'>
        <div>
        <div className='count'><h1>{count}</h1></div>
        </div>
        <div>
          <button onClick={() => {setCount(prev => prev +1)}}> Add More </button>
          <pre>
             {JSON.stringify(startWarrior, null, 2)}
          </pre>
         
        </div>
        
      </div>

      
    </div>
  );
}

export default App;
