import { useState } from "react";

function App() {

  // 리스트 저장할 
  const [writer, setWriter] = useState('');

  const [todolist, setTodolist] = useState([]);

  // 버튼 클릭 시 추가
  function addList(){
    setWriter('');
    setTodolist([...todolist, writer])
  }

  function deletes(index){
    // filter 인자 : element, index, array
    // element를 사용 안하니 _로 일단 표기
    // js는 무조건 인자를 맞춰서 넣어야함
    setTodolist(todolist.filter((_, i) => i !== index));
  }

  function deleteAll(){
    setTodolist([]);  
  }


  return (
    <div className="App">
      <h2>To-Do List</h2>

      <div>
        <input type="text" value={writer}  placeholder="새 할 일 입력" onChange={ (event) => {
          setWriter(event.target.value);
        }}></input>

        <button onClick={ () => {
          addList();
        }}>추가</button>

        <button onClick={ () => {
          deleteAll();
        }}>초기화</button>
      </div>


      <ul>
        {/* 추가한 리스트 넣기 */}
        {todolist.map((item, index) => (

          <li key={index}>{item} <button onClick={ () => {
            deletes(index);
          }}>취소</button> </li>

        ))}
      </ul>
    </div>
  );
}

export default App;
