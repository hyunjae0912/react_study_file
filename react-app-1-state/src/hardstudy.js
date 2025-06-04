import { use, useState } from "react";

function Header(props) {
  return <header>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }} >{props.title}</a></h1>
  </header>
}

function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props){

  return (
      <article>
          <h2>{props.title}</h2>
          {props.body}
      </article>
  );
}

// 헤더를 클릭하면 웰컴페이지를 표시
// 네비게이션을 클릭하면 상세페이지를 표시

// 모드 : welcome/read

function App() {

  const [mode, setMode] = useState('WELCOME');

  console.log(mode, setMode);
  // article에 넣을 내용
  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  }
  else if (mode === 'READ') {
    content = <Article title="HTML" body="Hello, read"></Article>;
  }


  const topics = [
    {id: 1, title: 'HTML', body: 'HTML is HyperText Markup Language.'},
    {id: 2, title: 'CSS', body: 'CSS is Cascading Style Sheets.'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is a programming language.'}
  ]

  // state는 컴포넌트의 삳ㅇ태를 관리하는 값으로
  // 값이 변경되면 컴포넌트 함수가 다시 호출되면서 ui가 변경됨

  return (  
    <div className="App">
      {/* 헤더를 클릭하면 모드를 변경한다. */}
      <Header title="WEB" onChangeMode={function () {
        //alert('Header');
        setMode('WELCOME');
      }}></Header>
      {/* 네비게이션을 클릭하면 모드를 변경한다. */}
      <Nav topics={topics} onChangeMode={function (id) {
        //alert(id);
        setMode('READ');
      }}></Nav>
      {content}
    </div>
  );
}

export default App;

// mode를 변경해도 화면이 그대로인 이유?
// app 함수가 실행될 때 ui가 생성되므로 mode가 변결되도 화면에 영향이 업음