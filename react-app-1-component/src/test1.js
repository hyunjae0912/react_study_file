
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