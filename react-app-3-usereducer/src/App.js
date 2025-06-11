import { useReducer, useState } from 'react';
import './App.css';


// 카운터 웹 만들기
function App() {

  // 리듀서 함수 만들기
  // 리듀서? : state를 더 체계적으로 관리하는 도구

  // 인자: 이전 state값, 액션(명령)

  // state를 중앙에서 관리 (한 곳에서 관리하는 것)

  // 사용자가 입력한 숫자를 저장할 변수
  const [num, setnum] = useState(0);

  function countReducer(oldState, action){

    if(action === "up"){
      console.log(action.num)
      return oldState + Number(action.num);
    }
    else if(action === "down"){
      return oldState - Number(action.num);
    }
    else if(action === "reset"){
      return 0;
    }
  }

  // userState 대신 useReducer 함수 사용
  // 인자 : 리듀서함수, state 초기값
  const [count, countDispatch] = useReducer(countReducer,0); 

  // setCount는 state를 직접 변경
  // dispatch는 리듀서함수를 통해서 state를 변경
  function down(){
    countDispatch("down");
  }
  
  function up(){
    countDispatch("up");
  }

  function reset(){
    countDispatch("reset");
  }

  // 버튼을 클릭하면 이벤트가 발생
  return (
    <div className="App">
      <button onClick={down}>-</button>
      <button onClick={reset}>0</button>
      <button onClick={up}>+</button>
      {/* 사용자가 입력한 값을 다시 value로 넣어야함 */}
      <input type='text' value={num} onChange={ (event) => {
        // state를 바꿀때는 set함수를 사용해야함
        setnum(Number(event.target.value));
      }}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;
