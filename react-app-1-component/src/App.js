/*
function Header(){
  return (
    <header>
        <h1>item list</h1>
    </header>
  );
}
function Main(){
    return(
        <div>
            item component
        </div>
    );
}

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
    </div>
  );
}

export default App;
*/

/*
function Header(){
  return (
    <header>
      <h1>Navigation</h1>
    </header>
  );
}
function Home(){
  return (
    <div>
      Home
    </div>
  );
}

function  About(){
  return (
    <div>
      About
    </div>
  );
}

function Contact(){
  return (
    <div>
      Contact
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header   />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
*/


function Header(){
  return (
    <header>
        <h1>Section component</h1>
    </header>
  );
}

function Main(){
    return(
        <div>
            <p>Content component</p>
        </div>
    );
}

// home about contact 

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Main />
      <Header />
      <Main />
      <Main />
    </div>
  );
}

export default App;