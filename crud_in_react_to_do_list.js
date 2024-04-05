import './App.css';
import { useState } from "react";



function App(){
  const[cartList, setCartList] = useState([]);
  const[newCart, setNewCart] = useState("");

  const cartChange =(e) => {
    setNewCart(e.target.value);
  };

  const addCart = () => {
    const cart ={
      id: cartList.length === 0 ? 1: cartList[cartList.length-1].id +1,
      cartName: newCart,
       
    };
    setCartList([...cartList, cart]);
  }  ;

  
  const deleteCart = (id) => {
    setCartList(cartList.filter((cart) => cart.id !== id))
  };
    return(
    <div className=""> 
      <div className="App">
       <input placeholder='Enter Cart List' onChange={cartChange}/>
        <button onClick={addCart}>ADD CART</button>
    </div>
    <div className="list">
      
      {cartList.map((cart) => {
        return (
          <div className="cart">
            <h1>{cart.cartName  }</h1>
            <button onClick={()=>deleteCart(cart.id)}>Delete</button>
          </div>
        );
      })}
  </div>
  </div>
  
);
}
export default App;
