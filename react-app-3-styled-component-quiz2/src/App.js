// App.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './Todo';

// 2. 리듀서 함수 정의
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      const newId = state.length === 0 ? 0 : state[state.length - 1].id + 1;
      return [...state, { id: newId, text: action.text }];

    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);

    case 'RESET':
      return [];

    default:
      return state;
  }
};

// 3. 스토어 생성
const store = createStore(todoReducer);

function App() {
  return (
    // 4. Provider로 앱에 스토어 연결
    <Provider store={store}>
      <div>
        <h3>To-Do List</h3>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
