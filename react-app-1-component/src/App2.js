
function Header(){
  return (
    <header>
      <h1><a href="/">WEB</a></h1>
      </header>
  );
}

function Oi(){
  return (
      <ol>
          <li> <a href="/read/1">html</a> </li>
          <li> <a href="/read/2">css</a> </li>
          <li> <a href="/read/3">js</a> </li>
      </ol>
  );
}

function Article(){
  return (
      <article>
          <h2>Welcome</h2>
          Hello, WEB!
      </article>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header>
        <h1><a href="/">web</a></h1>
      </header>
      <ol>
        <li> <a href="/read/1">html</a> </li>
        <li> <a href="/read/2">css</a> </li>
        <li> <a href="/read/3">js</a> </li>
      </ol>
      <article>
        <h2>Welcome</h2>
        Hello, WEB!
      </article>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Oi />
      <Article />
    </div>
  )
}
  */

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Oi></Oi>
      <Article></Article>
    </div>
  );
}

export default App;