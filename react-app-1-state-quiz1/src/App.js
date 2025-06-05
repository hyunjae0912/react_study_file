import { useState } from "react";
import "./App.css";

function App() {
  
  let [count, setNum] = useState(0);
  
  function up(){
    setNum(count + 1);
  }

  return (
    <div className="App">
      <input type="button" value="-" onClick={ () => {
        up();
      }}></input>  

      <input type="button" value="0" onClick={ () => {
        count = 0;
        setNum(count);
      }}></input>  

      <input type="button" value="+" onClick={ () => {
        count++;
        setNum(count);
      }}></input>  

      <span>{count}</span>
    </div>
  );
}

export default App;
