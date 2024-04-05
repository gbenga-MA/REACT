function App() {
 
  return ( 
  <div className="App">
     <User name="Amanda" age={25} email="michaelayox@gmail.com"/>
     </div>
  );
}
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}

export default App;
