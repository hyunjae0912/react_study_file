import { use, useState } from "react";


function App() {
  // 값이 두자리 수 이상일 경우?
  const [number, setNum] = useState("");

  const [answer, serAnswer] = useState("");

  function buttonClick(value) {
    if (value === "=") {
      Calculate();
    }
    if(value === "c") {
      setNum("");
      serAnswer("");
    }
    const newNumber = number + value.toString();
    setNum(newNumber);
  }

  function Calculate() {
    // eval() 함수는 문자열로 된 JavaScript 코드를 실행한다.
    // 그냥 실무에선 사용하지 않는 것이 좋다.
    const result = eval(number);
    serAnswer(result);
  }



  return (
    <div className="App">
      <h2>계산기</h2>
      <span>식 : {number}</span>
      <br />
      <span>결과 : {answer}</span>
      <br />
      <button onClick={ () => buttonClick(1)}>1</button>
      <button onClick={ () => buttonClick(2)}>2</button>
      <button onClick={ () => buttonClick(3)}>3</button>
      <button onClick={ () => buttonClick(4)}>4</button>
      <button onClick={ () => buttonClick(5)}>5</button>
      <button onClick={ () => buttonClick(6)}>6</button>
      <button onClick={ () => buttonClick(7)}>7</button>
      <button onClick={ () => buttonClick(8)}>8</button>
      <button onClick={ () => buttonClick(9)}>9</button>
      <button onClick={ () => buttonClick(0)}>0</button>
      <br />
      <button onClick={ () => buttonClick("+")}>+</button>
      <button onClick={ () => buttonClick("-")}>-</button>
      <button onClick={ () => buttonClick("*")}>*</button>
      <button onClick={ () => buttonClick("/")}>/</button>
      <br />
      <button onClick={ () => buttonClick("=")}>=</button>  
      <button onClick={ () => buttonClick("c")}>C</button>
    </div>
  );
}
// 식에 누른 값 표시하기
export default App;
