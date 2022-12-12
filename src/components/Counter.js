import React, {useState} from 'react'

const Counter = () => {
   const [counter, setCounter] = useState(0)

   function increment() {
      setCounter(counter +1)
    }
    function decrement() {
      setCounter(counter -1)
    }
  

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
         <button onClick={decrement}>Decrement</button>
         <button onClick={increment}>Increment</button>
      </div>
      
    </div>
   
  )
}

export default Counter