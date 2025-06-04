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

function App() {

  const [mode, setMode] = useState('WELCOME');

  console.log(mode, setMode);
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


  return (  
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        //alert('Header');
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={function (id) {
        setMode('READ');
      }}></Nav>
      {content}
    </div>
  );
}

export default App;