import './App.css';
import { useState } from "react";
// import { User } from './user'; //
      

 function App(){  
  const[count,setCount] = useState(0)
  const increase=()=>{
    setCount(count + 1)
  };
  const decrease=()=>{ 
    setCount(count - 1)
  };
  const zero=()=>{
    setCount(0)
  }
  
  return <div className="App">
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={zero}>Set to Zero</button>
  {count}
  </div>
}
export default App;
