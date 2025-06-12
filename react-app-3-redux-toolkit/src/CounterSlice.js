import { configureStore, createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: 'counterSlice', 
  initialState: { value: 0 }, 
  reducers: { 
    up: (state, action) => {
      // 액션함수의 인자는 payload라는 값으로 전달됨
      state.value = state.value + action.step;
    }

  }
});
