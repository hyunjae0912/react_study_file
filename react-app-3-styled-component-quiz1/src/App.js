import { Link, NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={ <HomeElement/> }></Route>
        <Route path="/about" element={ <AboutElement/> }></Route>
        <Route path="/contact" element={ <ContactElement/> }></Route>
      </Routes>
    </div>
  );
}

const HomeHref = styled.div`
  background-color: gray;
  padding: 10px;
`;

const HomeA = styled(NavLink)`
  text-align: center;
  margin-right: 20px;
`;

const activeee = styled.active`

`;

const Home = styled.div`
  background-color: skyblue;
`;

const About = styled.div`
  background-color: pink;
`;

const Contact = styled.div`
  background-color: yellow;
`;


function NavBar(){
  return (
    <HomeHref>
      <HomeA to='/'>Home</HomeA>
      <HomeA to='/about'>About</HomeA>
      <HomeA to='/contact'>Contact</HomeA>
    </HomeHref>
  );
}

function HomeElement(){
  return(
    <Home>
      <h2>Home</h2>
      <p>Home Page...</p>
    </Home>
  )
}

function AboutElement(){
  return(
    <About>
      <h2>About</h2>
      <p>About Page...</p>
    </About>
  )
}

function ContactElement(){
  return(
    <Contact>
      <h2>Contact</h2>
      <p>Contact Page...</p>
    </Contact>

  )
}




export default App;
