import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import './App.css';

// a 태그를사용하면 링크를 클릭할 때 index.html 파일을 다시 불러옴
// 이때 모든 컴포넌트를 다시 재생성하면서 메모리 낭비가 발생함

function Home(){
  return (
      <div>
        <h2>Home</h2>
        Home...
      </div>
  );
}




let topics =[
  { id : 1, title:'html', body:'html is...'},
  { id : 2, title:'css', body:'css is...'},
  { id : 3, title:'js', body:'js is...'}
];



function Topic(){
  let param = useParams();

  let selected_topic = {title:'sorry', body:'Not Found'};

  for(let t of topics){
    // 배열의 토픽 아이디와 현재 토픽 아이디를 비교
    if(t.id === Number(param.topic_id)){
      selected_topic = t;
    }
  }

  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.bod}
    </div>
  )
}

function Topics(){
  // 배열을 사용해서 링크 생성

  // li태그를 담을 변수 선언
  let lis = [];

  for(let t of topics){
    lis.push( <li key={t.id}><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li> )
  }



  // URL에서 파라미터 꺼내기
  return (
    <>
      <div>
        <h2>Topics</h2>
      </div>  
      <ul>
        {lis}
      </ul>

      <Routes>
        <Route path="/:topic_id" element={<Topic></Topic> }></Route>
      </Routes>
      </>
  );
}










function Content(){
  return (
      <div>
        <h2>Content</h2>
        Content...
      </div>  
  );
}












function App() {
  return (
    <div className="App">
      <h2>Hello React Router DOM</h2>
      <ul>
        { /* link -> navlink */ }
        { /* link에 부가기능이 추가됨 */ }
        { /* 현재 주소에 따라 active라는 class가 추가됨 */ }
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/content'>Contact</NavLink></li>
      </ul>

      { /* topics과 관련된 경로가 여러개이면 /* 처럼 별표를 추가함 */ }
      {/* url 주소가 변하는데로 아래에 있는 엘리먼트가 변경됨 */}
      <Routes>
        <Route path="/home" element={ <Home/>}></Route>
        <Route path="/topics/*" element={ <Topics/> }></Route>
        <Route path="/content" element={ <Content />}></Route>
        <Route path="/*" element={ 'Not Found' }></Route>
      </Routes>
    </div>
  );
}

export default App;
