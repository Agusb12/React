import './App.css';

function App() {
  const styleApp = { padding : "10 20"  ,marginTop : 10, color : "#ad1" }
  const handleClick = ()=> {
   
    const nuevoElemento = document.querySelector(".App")
      nuevoElemento.innerHTML = `
      <p> "Hola, nuevo usuario" </p>     
      `
      
  }
  return (
 
    <div className="App" style = {styleApp}>
      <h1>Hello world</h1> 
      <button onClick = {handleClick} style = {{outline: "none", border: "none", borderTop : "solid 2px #12ad" }}>Click me!</button>
    </div>
  );
}

export default App;
