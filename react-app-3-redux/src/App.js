import { useState } from 'react'
import './App.css'
import { createStore } from 'redux'
import { Provider, useDispatch, useSelector } from 'react-redux'



function App() {


  const [num, setNum] = useState(1);






  function Right(props){
    
    return(
      <div>
        <h1>Right</h1>
        <Right2/>
      </div>
    )
}


  function Right2(props){

    console.log('Right2..', props)

  return(
    <div>
      <h1>Right2</h1>
      <Right3/>
    </div>
  )
}

// 버튼을 클릭하면 num이 1만큼 증가
  function Right3(props){

    // redux 스토어에서ㅓ dispatch 함수 꺼내기
    // dispatch : state를 변경할때 사용하는 함수 이ㅏ용해서 명령을 전달
    const dispatch = useDispatch();

    return(
      <div>
        <h1>Right3</h1>
        <button onClick={ () => {
          dispatch( { type:'PLUS' } )   // 공백 없이 정확하게
        }}>+</button>
      </div>
    )
}

  function Left(props){
  return(
    <div>
      <h1>Left</h1>
      <Left2 />
    </div>
  )
}

function Left2(props){
  return(
    <div>
      <h1>Left2</h1>
      <Left3/>
    </div>
  )
}

function Left3(props){

  // redux store에서 num이라는 state 꺼내기
  // useSelector: 스토어에서 state를 조회하는 함수

  const num = useSelector(state => state.num)
  useSelector( (state) => {
    console.log('state: ', JSON.stringify(state))
    return state.num;
  });

  console.log('num: ',num);

  return(
    <div>
      <h1>Left3 : {num}</h1>
    </div>
  )
}

// redux : state를 관리하는 저장송
// 여러 컴포넌트에서 공유할 수 있다.

// redux 저장소 만드는 방법
// 1. 리듀서 함수 만들기
// reducer : state를 바꾸는 함수


// 이벤트발생 -> dispatch 호출 -> reducer 호풀
// 리듀서 함수에 plus를 처리하는 로직 추가
function reducer(oldState, action){
  console.log(action);

  if(oldState === undefined){
    return { num : 1 }
  }

  if(action.type === 'PLUS'){
    const newState = { ...oldState }
    newState.num++;
    return newState;
  }

  // 기존 상태 유지
  return oldState;
}


// 2. 스토어 생성
// 인자 : 리듀서 함수
// 반환값 : 스토어 (state들의 모음)
  const store = createStore(reducer);


  // 리듀서 함수: state를 바꾸는 함수
  // 스토어 : state 여러개를 모아놓는 저장소이며, 컴포넌트 사이에서 공유

  // 하위 컴포넌트에서 store를 사용하기 위해 store를 주입
  return (
    <div className="App">

      <h1>Root</h1>
      <div id='grid'>
        {/* left와 right 컴포넌트를 provider로 감싸기 */}
        <Provider store={store}>
          <Left/>
          <Right/>
        </Provider>
      </div>
    </div>
  );
}




export default App;


/*
redux : state 저장소, 컴포넌트 사이에 state를 공유
reducer함수 : state를 변경하는 함수, state를 체계적으로 관ㄹ
dispatch 함수 ㅣ state를 변경할 때 명령을 전달하는 함수
useSelector 함수 :  state 저장소(store)에서 state를 꺼낼때 사용
*/