import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">

      <Routes>
        {/* 중첩 라우트 */}
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={"home..."}></Route>
          <Route path="/register" element={"register..."}></Route>
          <Route path="/login" element={"login..."}></Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
