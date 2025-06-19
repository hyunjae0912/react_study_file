import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

// Router: URL 주소에따라 화면을 전환하는 기능

// context 생성
// 여러 컴포넌트에서 값을 공유할 떄 사용
// store, slice 여러 컴포넌트에서 상태를 공유할 떄 사용
export const Context = createContext();

const host = 'http://localhost:8080';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ host }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);