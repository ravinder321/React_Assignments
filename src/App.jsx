import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);
  
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  
  console.log("Prev:", prevCount.current, "Current:", count);
  
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App
