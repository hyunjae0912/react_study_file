// 매개변수로 props 속성 받기

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
    // onChangeMode 함수에 id를 전달하기 위해 a태그에 id 추가
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(event) => {
      event.preventDefault();
      // props로 전달받은 함수를 실행
      // event.target.id: 이벤트가 발생한 a태그에서 id를 꺼내서 사용
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

  console.log(props.title, props.body);
  return (
      <article>
          <h2>{props.title}</h2>
          {props.body}
      </article>
  );
}

function App() {

  // article에 들어가는 링크 목록을 생성


  const topics = [
    {id: 1, title: 'HTML', body: 'HTML is HyperText Markup Language.'},
    {id: 2, title: 'CSS', body: 'CSS is Cascading Style Sheets.'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is a programming language.'}
  ]

  return (  
    <div className="App">
      {/* Header 컴포넌트에 title이라는 속성을 추가 */}
      <Header title="WEB" onChangeMode={function () {
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={function (id) {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, react"></Article>
    </div>
  );
}

export default App;