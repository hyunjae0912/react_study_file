import { createStore } from "redux";
import Calc from './Calc';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";



// 계산기에서 result state 만 redux로 관리하는 중
// redux => redux 

// slice를 먼저 생성하고 slice 여러개를 모아서 store 생성
// slice 특정 지능에 필요한 store 저장

export const calcSlice = createSlice({
  name: 'calc',
  initialState: { result: null },
  reducers: {
    '+': (state, action) => {
      state.result = action.payload.num1 + action.payload.num2;
    },
    '-': (state, action) => {
      state.result = action.payload.num1 - action.payload.num2;
    },
    '*': (state, action) => {
      state.result = action.payload.num1 * action.payload.num2;
    },
    '/': (state, action) => {
      state.result = action.payload.num1 / action.payload.num2;
    },
    '0': (state) => {
      state.result = null;
    },
  },
});


const store = configureStore({
  reducer: {
    calc: calcSlice.reducer,
  },
});



function App() {


    // redux toolkit 시능
    // 기존의 reducer은 state의 불변성을 유지하기 위해
    // state를 복제한 다음에 사용했음
    // 하지만 toolkit에서는 state를 바로 사용할 수 있다.





  return (
    <div>
      <h3>계산기</h3>
      {/* redux의 provider로 store를 주입 */}
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
    </div>
  );
}

export default App;