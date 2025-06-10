import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 라우터 사용준비
    // 최상위 app 컴포넌트를 라우터로 감싸지
    // 이제 app 컴포넌트와 하위 컴포넌트에서 라우터를 사용할 수 있음
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

