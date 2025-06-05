import { useState } from "react";

function App() {

  let [color, setColor ] = useState('gray');

  // 함수 정리
  function changeColor(newColor) {
    setColor(newColor);
  }
  return (
    <div className="App">
      {/* 버튼과 텍스트 */}
      <button onClick={ () => {
        changeColor('red');
      }}>빨강</button>

      <button onClick={ () => {
        changeColor('green');
      }}>초록</button>

      <button onClick={ () => {
        changeColor('blue');
      }}>파랑</button>

      <span style={ {color: color} }>안녕하세용</span>
    </div>
  );
}

export default App;
