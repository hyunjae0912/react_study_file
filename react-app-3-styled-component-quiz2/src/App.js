import styled from "styled-components";

const MiddleFont = styled.h1`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Vanilla = styled.button`
  width: 200px;
  height: 200px;
  background-color: #fff7cc;
  border: 3px solid #eee;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`;

const Choco = styled.button`
  width: 200px;
  height: 200px;
  background-color: chocolate;
  border: 3px solid #eee;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`;

const Strowbarray = styled.button`
  width: 200px;
  height: 200px;
  background-color: #ffd1dc;
  border: 3px solid #eee;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
`;

function App() {
  return (
    <div className="App">
      <MiddleFont>아이스크림을 골라보세요</MiddleFont>

      <ButtonContainer>
        <Vanilla>바닐라</Vanilla>
        <Choco>초콜랫</Choco>
        <Strowbarray>딸기</Strowbarray>
      </ButtonContainer>


    </div>
  );
}

export default App;
