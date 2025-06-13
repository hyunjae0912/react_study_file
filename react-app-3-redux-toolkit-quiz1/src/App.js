import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './Todo';
import { configureStore, createSlice } from '@reduxjs/toolkit';



export const todoSlice = createSlice( {
  name:'todo',
  initialState:{
    list:[]
  },
  reducers: {
    add: (state, action) => {
      let newId = 0;
      if (state.list.length !== 0) {
        newId = state.list[state.list.length - 1].id + 1;
      }
      state.list.push({ id: newId, text: action.payload });
    },
    delete: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    reset: (state) => {
      state.list = [];
    },
  },
})


const store = configureStore({
  reducer:{
    todo: todoSlice.reducer
  }
});

function App() {

  return (
    <div>
      <h3>To-Do List</h3>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;