import React from 'react';

function App() {

  // html 코드 작성하기

  // 1. 자바스크립트의 함수를 사용하여 HTML 태그 생성
  let element1 = React.createElement('div', null, 'Hello');

  // 2. react의 JSX 문법을 사용하여 HTML 태그 생성
  let element2 = <div>Hello</div>;
  
    const content = "Hello, World!";
  const name = "이름을 입력하세요!";
  
  return (
    // 생성한 태그를 화면에 추가
    // jsx 안에서 변수를 사용할 떈 {} 사용
    // jsx 문법을 사용하면 내부적으로 createElement 함수가 호출되어 결과가 동일
    // jsx가 조금 더 편리하고 가독성이 좋음
    <div className="App">
      { element1 }
      { element2 }
            { content }
      <input placeholder={name}></input>
    </div>
  );
}

export default App;
