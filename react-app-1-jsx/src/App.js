
// jsx 문법으로 html태그를 작성할때는 하나의 요소만 있어야함
// 부모 태그로 자식들을 감싸야함
function Sample(){
  // 빈 태그 : <></> 단순하게 자식을 묶는 용도
  return(
    <>
      <h1>안녕하세요</h1>
      <h1>하이</h1>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Sample></Sample>
    </div>
  );
}

export default App;
