// import logo from './logo.svg';
import { useState } from 'react';

// 네비게이션에서 선택한 글의 내용이 출력되도록 처리
// 1번을 클릭하면 HTML, 2번을 클릭하면 CSS, 3번을 클릭하면 JS

function Header(props) {

  return <header>
    <h1><a href='/' onClick={event => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a>
    </h1>
  </header>
}




function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={function (event) {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}



function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}




function Create(props) {

  console.log(props);

  return (
    <article>
      <h2>Create</h2>
      {/* form 태그 안에서 submit 버튼을 클릭하면 onsubmit 이벤트 발생함 */}
      <form onSubmit={ (event) => {
        // 사용자가 입력한 값을 꺼내서 topics 배열에 추가
        event.preventDefault();
        // console.log(event.target.title.value);
        // console.log(event.target.body.value);
        
        // props에 전달받은 함수를 호출
        props.onCreate(event.target.title.value, event.target.body.value);
        }}>
        <p>
        <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
        <input type="text" name="body" placeholder="body"></input>
        </p>
        <p>
        <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}





// !! state는 컴포넌트의 생명주기를 관리하는 데이터이므로 일반함수에서는 사용할 수 없음
function App() {

  let [mode, setMode] = useState('WELCOME');

  // state : 컴포넌트의 생명주기를 관리하는 훅(도구)
  // state가 변경되면 해당 컴포넌트 함수가 다시 실행됨 그래서 state가 변경되면 화면이 바뀜
  let [id, setId] = useState(null);



  const temp = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  const [topics, setTopics] = useState(temp);

  let content = null;



  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === "READ") {

    let title, body = null;

    // topics 목록에서 현재 선택된 id에 맞는 내용을 찾기
    for (let t of topics) {
      // string 타입이므로 숫자로 변경하여 비교해야함
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    // 선택한 내용에 따라 컴포넌트 생성
    content = <Article title={title} body={body}></Article>
  }
  else if (mode === "CREATE") {
    // 등록을 처리학 위해
    // oncreate라는 함수를 props에 추가
    content = <Create onCreate={ (title, body) => {
      //console.log(title, body);  잘 전달됨
      // 이 전달받은 값으로 topics 배열에 추가


      let newTopic = {id : topics.length + 1, title: title, body: body};
      topics.push(newTopic);
      // 등록 후에는 READ 모드로 변경


      // topic는 배열(오브젝트) 이기 때문에 안됨
      // state는 값이 바뀌어야 컴포넌트가 다시 실행됨
      // 추가 작업을 조져줘야함
        const newTopics = [...topics];

      setTopics(newTopics);
      setId(newTopic.id);
      setMode('READ');
    } }></Create>;
  }
  // 확인을 해보면 목록을 선택해도 화면에는 변화가 없다
  // 조건문에서 id는 nav컴포넌트의 a태그의 속성인데 문자로 전달됨
  // 타입을 숫자로 변환해야함



  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={function (id) {
        setMode('READ');
        // 네비게이션을 클릭하면 선택한 항목의 id로 state를 변경
        setId(id);
      }}></Nav>



      {content}



      {/* 등록 페이지로 이동하는 링크 */}
      <a href="/create" onClick={ (event) => {
        // 페이지 이동 막기
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>

    </div>
  );
}

export default App;