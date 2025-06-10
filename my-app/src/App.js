import { Link, Route, Routes } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>자기소개 페이지</h2>
      <nav>
        <Link to='/about/profile'>프로필</Link>
        <Link to='/about/hobby'>취미</Link>
        <Link to='/about/contact'>전화</Link>
      </nav>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>환영 페이지</h2>
    </div>
  );
}
export default App;
