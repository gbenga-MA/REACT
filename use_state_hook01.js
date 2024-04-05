function App(){    //  Login Session //
 const [inputEmail, setInputEmail]= useState("");
 const displayEmailLogin = (e) =>{       //where e = "event".
       setInputEmail(e.target.value);  // e = EVENT
 };
  
  
  return <div className="App">
    <input type="text" 
    placeholder="Enter your e-mail" 
    value ={inputEmail}   //  input value if necessary //
    onChange ={displayEmailLogin} />    {inputEmail}
    <button onClick={()=>{
      alert("Thanks your Email is VALIDATED")
    }}>VALIDATE</button>
  
  </div>
}
export default App;
