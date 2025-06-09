import { NavLink, Route, Routes, useParams } from "react-router-dom";
import './App.css'

function Welcome(){
  return(
    <div>
      <LinkBar/>
      <h3>Welcome</h3>
      welcome...
    </div>
  )
}


function LinkBar(){
  return(
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/movie'>Movie</NavLink></li>
      </ul>
  );
}


  let movielist = [
                    {
                    "id": 1,
                    "title": "기생충",
                    "description": "부유한 가족에 침투한 가난한 가족의 이야기를 다룬 사회적 풍자극.",
                    "poster": "/기생충.jpg"
                    },
                    {
                    "id": 2,
                    "title": "부산행",
                    "description": "좀비 바이러스가 퍼진 한국에서 KTX를 타고 부산으로 향하는 사람들의 이야기.",
                    "poster": "/부상행.jpg"
                    },
                    {
                    "id": 3,
                    "title": "올드보이",
                    "description": "15년간 감금된 후 복수를 위해 나선 남자의 이야기.",
                    "poster": "/올드보이.jpg"
                    }
                  ]



function Movies_List(){
// 이미지 태그 사용해서 보여주기


  let lis = [];
  for(let t of movielist){
    lis.push(<li key={t.id}><NavLink to={'/movie/' + t.id}>{t.title}</NavLink> </li> );
  }

  console.log(lis)
  return (
    <div>
      <LinkBar/>
      <h2>Movies List</h2>
      <ul>
        {lis}
      </ul>
    </div>
  );
}


function Movie(){
  let param = useParams();

  let selected_movie = {title:'sorry', description:'not found'};

  // 배열을 순회하면서 매개변수에 담고 조건문 달아주기
  /*
  movielist.find( (m) => {
    if(m.id === Number(param.movie_id)){
      return true;
    }
  })
  */

  for(let t of movielist){
    if(t.id === Number(param.movie_id)){
      selected_movie = t;
    }
  }

  return(
    <div>
      <LinkBar/>
      <h2>{selected_movie.title}</h2>
      <p>{selected_movie.description}</p> 
      <img src={selected_movie.poster} alt={selected_movie.title}/>
    </div>
  );
}







function Mainfont(){
  return (
    <div>
      <Routes>
        <Route path="/*" element={ <Welcome/> }></Route>
        <Route path="/home" element={ <Welcome/> }></Route>
        <Route path="/movie" element={ <Movies_List/> }></Route>
        <Route path="/movie/:movie_id" element={ <Movie/> }></Route>
      </Routes>
    </div>
  );
}







function App() {
  return (
    <div className="App">
      <Mainfont />
    </div>
  );
}

export default App;
