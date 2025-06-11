import './App.css';
import { createContext, useContext } from 'react';

// context를 사용하는 이유
// 여러 컴포넌트에서 값을 공유하기 위해서
// 값을 props로 일일이 전달하는 대신 context를 사용하면 바로 전달 가능
// state는 컴포넌트 내부에서만 선언할 수 있기 때문에 전역으로 공유 불가
// theme는 일반 변수지만, 나중에 state를 공유할 때도 context를 사용할 수 있음

const themeDefault = { border: '10px solid red' };
const themeContext = createContext(themeDefault);

// Sub1와 Sub2의 테두리만 변경하기

function App() {

  const theme = useContext(themeContext);

  return (
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1></Sub1>
    </div>
  );
}

// Sub2와 Sub3이 포함되어 있는 Sub1을 Provider로 감싸기
// value에 새로운 스타일을 설정
function Sub1() {

  const theme = useContext(themeContext);
  console.log('sub1 : ',theme)
  return (
    <themeContext.Provider value={{ border: '10px solid green' }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2></Sub2>
      </div>
    </themeContext.Provider>
  );
}

// Provider 하위에 있는 컴포넌트들은 새로운 값을 전달받게됨
// Sub2는 부모 중 가장 먼저 등장하는 Provider의 value값을 가지게됨
function Sub2() {

  const theme = useContext(themeContext);
  console.log('sub2 : ',theme)

  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

function Sub3() {

  const theme = useContext(themeContext);
  console.log('sub3 : ',theme)

  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

export default App;