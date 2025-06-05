import { useState } from "react";

function App() {

  let [count, setLength] = useState(0);

  return (
    <div className="App">
      {/* onChange는 뭐랄까.. 실시간 반영이라 생각하는게 나을듯 */}   
      <input type="text" placeholder="Enter text here" onChange={ (event) => {
        setLength(event.target.value.length);
      }}/>
      <span>글자 수 : {count}</span>
    </div>
  );
}

export default App;