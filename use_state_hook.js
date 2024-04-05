import '/App.css';
import { useState } from "react";
// import { User } from './user'; //

function App(){         //setting the price tag//
  const [price, setPrice] = useState(15);
  const increasePrice = () => {
    setPrice(price + 5);
  }
  
  return <div className="App">${price}<button onClick={increasePrice}>ADJUST PRICES</button>
  
  </div>
}
export default App;
