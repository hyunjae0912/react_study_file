import { Provider } from 'react-redux';
import { Counter } from './Counter';
import  store  from './Store';




function App() {
  return (
    // Provider로 앱에 스토어 주입
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;