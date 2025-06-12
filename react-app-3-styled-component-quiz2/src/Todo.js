// Todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
    const [input, setInput] = useState('');

  // 6. useSelector로 리스트 가져오기
    const todo = useSelector(state => state);

  // 5. useDispatch로 액션 디스패치
    const dispatch = useDispatch();

    return (
    <div>
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할 일 입력"
    />

        <button
        onClick={() => {
            if (input.trim() === '') return;
            dispatch({ type: 'ADD', text: input });
            setInput('');
        }}
        >
        추가
        </button>

        <button
        onClick={() => dispatch({ type: 'RESET' })}
        >
        초기화
        </button>

        <ul>
        {todo.map((todoItem) => (
            <li key={todoItem.id}>
            {todoItem.text}
            <button
                onClick={() => dispatch({ type: 'DELETE', id: todoItem.id })}
            >
                삭제
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default Todo;

/*
redux store : state 저장소, 컴포넌트 건에 state 공유
reducere : state를 변경하는 함수
dispatch : state를 변경하기 위한 명령을 전달하는 함수
useselector : store에서 state를 꺼내는 함수
*/