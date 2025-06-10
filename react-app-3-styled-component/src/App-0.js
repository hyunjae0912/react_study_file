import styled from "styled-components";
import Home from "./Home";

// styled.tag 이름 + ``
const SimpleButton = styled.button`
  color: white;
  background-color: purple;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = () => {
  return <button></button>
};

function App() {
  return (
    <div className="App"> 
  <SimpleButton>Simple</SimpleButton>
  <LargeButton>Large</LargeButton>
  <ReactButton>react</ReactButton>
    </div>
  );
}

export default App;
