import { Link, NavLink,  Route, Routes, useParams, Outlet } from "react-router-dom";

let mypage_list = [
  {
    "id": "profile",
    "name": "홍길동",
    "age": "30세"
  },
  {
    "id": "hobby",
    "hobbys": "독서, 등산, 사진 찍기"
  },
  {
    "id": "call",
    "email": "hong@example.com",
    "phone": "010-1234-5678"
  }
];

function LinkBar() {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Link to='/' style={{ marginRight: "10px" }}>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

function SubLinkBar() {
  return (
    <div style={{ marginBottom: "10px" }}>
      <NavLink to='/about/profile' style={{ marginRight: "10px" }}>프로필</NavLink>
      <NavLink to='/about/hobby' style={{ marginRight: "10px" }}>취미</NavLink>
      <NavLink to='/about/call'>연락처</NavLink>
      <hr />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h2>자기소개 페이지입니다.</h2>
    </div>
  );
}

function AboutDetail() {
  let param = useParams();
  let selected_about = mypage_list.find(t => t.id === param.about_id);

  return (
    <div>
      {selected_about ? (
        <div>
          <h3>
            {selected_about.id === "profile" && "프로필"}
            {selected_about.id === "hobby" && "취미"}
            {selected_about.id === "call" && "연락처"}
          </h3>
          <div>
            {selected_about.name && <p>이름: {selected_about.name}</p>}
            {selected_about.age && <p>나이: {selected_about.age}</p>}
            {selected_about.hobbys && <p>취미: {selected_about.hobbys}</p>}
            {selected_about.email && <p>이메일: {selected_about.email}</p>}
            {selected_about.phone && <p>전화: {selected_about.phone}</p>}
          </div>
        </div>
      ) : (
        <p>정보가 없습니다.</p>
      )}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>자기소개 페이지</h2>
      <SubLinkBar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <LinkBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about/*" element={<About />}>
          <Route index element={<Welcome />} />
          <Route path=":about_id" element={<AboutDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
