import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";


function LinkBar(){
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
    </div>
  )
}

function Welcome(){
  return(
    <div>
      <h2>커피 주문 앱입니다.</h2>
    </div>
  )
}

let coffee_list = [
  {
    "id" : "americano",
    "name" : "아메리카노",
    "description" : "진하고 깔끔한 에소프레소 커피입니다."
  },
  {
    "id" : "lattee",
    "name" : "라때",
    "description" : "우유가 부드럽게 섞인 커피입니다."
  },
  {
    "id" : "cappuccino",
    "name" : "카푸치노",
    "description" : "거품이 풍성하고 진한 커피입니다."
  }
]

function Menu_list(){
  let lis = [];
  for(let t of coffee_list){
    lis.push(<li key={t.id}><NavLink to={'/menu/' + t.id}>{t.name}</NavLink> </li>)
  }

  return (
    <div>
    <h2>커피 메뉴</h2>
    <ul>
      {lis}
    </ul>
    </div>
  );
}


function Coffee(){
  let param = useParams();

  let selected_coffee = {name:'sorry', description:'음료가 없습니다.'};

  for(let t of coffee_list){
    if(t.id === param.coffee_id){
      selected_coffee = t;
    }
  }

  return(
    <div>
      <h2>{selected_coffee.name}</h2>
      <p>{selected_coffee.description}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <LinkBar />
      <Routes>
        <Route path="/*" element = {<Welcome/>}></Route>
        <Route path="/menu" element={<Menu_list/>}></Route>
        <Route path="/menu/:coffee_id" element={<Coffee/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
