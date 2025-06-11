/* eslint-disable default-case */
import { useState } from "react";

function App() {

  const [num1,setnum1] = useState(0);
  const [num2,setnum2] = useState(0);
  const [operator,setoperator] = useState(null);
  const [input, setInput] = useState('');
  const [result, setresult] = useState('');


  function changeNumber(num){

    setInput(input + num);

    if(operator === null){
      setnum1(num);
      console.log(num);
    }
    else{
      setnum2(num);
      console.log(num);
    }
  }

  function cals(){
    let temp = 0;
    
    switch(operator){
      case '+':
        temp = num1 + num2;
        break;
      case '-':
        temp = num1 - num2;
        break;
      case '*':
        temp = num1 * num2;
        break;
      case '/':
        temp = num1 / num2;
        break;
    }
    
    setresult(temp);
  }

  function clear(){
    setnum1(0);
    setnum2(0);
    setInput('');
    setoperator(null);
    setresult('');
  }

  return (
    <div className="App">

    <h2>계산기</h2>

    <div>
      <div>식 :{input}</div>
      <div>결과 :{result}</div>
    </div>

    {/* 1~10 까지 숫자버튼 */}
    <div>
    { [1,2,3,4,5,6,7,8,9,0].map( (num) => {
      return <button key={num} onClick={ () => {changeNumber(num)}}>{num}</button>
    } ) }
    </div>

    <div>
    { ['+','-','*','/'].map ( (op) => {
      return <button key={op} onClick={ () => {
        setInput(input + op);
        setoperator(op);
      } }>{op}</button>
    } ) }
    </div>

    <div>
      <button onClick={() => {
        cals();
      }}>=</button>

      <button onClick={ () => {
        clear();
      }}>C</button>
    </div>

    </div>
  );
}

export default App;