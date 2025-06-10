import styled from "styled-components";
import Home from "./Home";

// styled.tag 이름 + ``
const SimpleButton = styled.button`
  color: white;
  background-color: purple;
`;

// styled component로 생성한 태그에는 class이름이 있어야함
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = (props) => {
  // 자식버튼이 생성될 때 props로 버튼의 이름과 class이름이 전달됨
  // button태그에 class이름으로 적용해야함
  return <button className={props.className}>{props.children}</button>
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;


// 버튼의 속성에 따라 색 변경하기
// 함수가 반환하는 값이 color가 됨
// 버튼에 primart라는 속성이 있으면 color를 white로 변경




function App() {
  return (
    <div className="App"> 
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>react</ReactButton>
      <ReactLargeButton>LargeReact</ReactLargeButton>
      <PrimayButton>Normal</PrimayButton>
      <PrimayButton Primay>PrimartButton</PrimayButton>
    </div>
  );
}

const PrimayButton = styled.button`
  color: ${ (props) => {
    console.log(props)
    if(props.Primay){
      return 'white';
    }
    else{
      return 'dark'
    }
  } }
`;

export default App;
