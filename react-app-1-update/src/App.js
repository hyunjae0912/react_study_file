import { useState } from 'react';
function Header(props) {

  return <header>
    <h1><a href='/' onClick={event => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a>
    </h1>
  </header>
}




function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={function (event) {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
    </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}



function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}




function Create(props) {

  console.log(props);

  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={ (event) => {
        event.preventDefault();
        props.onCreate(event.target.title.value, event.target.body.value);
        }}>
        <p>
        <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
        <input type="text" name="body" placeholder="body"></input>
        </p>
        <p>
        <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}


function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return(
    <article>
      <h2>Update</h2>

      <form onSubmit={ (event) => {
        event.preventDefault();
        props.onUpdate(event.target.title.value, event.target.body.value);
      }}>

        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={ (event) => {
            setTitle(event.target.value);
            } }>
          </input>
        </p>

        <p>
          <input type="text" name="body" placeholder="body" value={body} onChange={ (event) => {
            setBody(event.target.value);
          }}></input>
        </p>
        
        <p>
          <input type="submit" value="Update"></input>
        </p>

      </form>

    </article>
  );

}




function App() {

  let [mode, setMode] = useState('WELCOME');

  let [id, setId] = useState(null);

  let contextControl = null;

  const temp = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  const [topics, setTopics] = useState(temp);

  let content = null;



  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } 
  
  
  else if (mode === "READ") {

    let title, body = null;

    for (let t of topics) {
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>

    contextControl =
    <>
    <li>
      <a href={"/update/" + id} onClick={ (event) => {
      event.preventDefault();
      setMode('UPDATE');
      }}>
      Update
      </a>
    </li>
    <li>
      <input type="button" value="Delete" onClick={ () => {
        
      }}>Delete</input>
    </li>
    </>;

  }
  else if (mode === "CREATE") {
    content = <Create onCreate={ (title, body) => {


      let newTopic = {id : topics.length + 1, title: title, body: body};
      topics.push(newTopic);
      const newTopics = [...topics];

      setTopics(newTopics);
      setId(newTopic.id);
      setMode('READ');
    } }></Create>;
  }
  else if (mode === "UPDATE") {
    let title, body = null;
    for(let t of topics){
      if(t.id === Number(id)){
        title = t.title;
        body = t.body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title,body)=>{

      const newTopic = {id: Number(id), title: title, body: body};

      for(let i in topics){
        if(topics[i].id === Number(id)){
          topics[i] = newTopic;
          break;
        }
      }
      const newTopics = [...topics];

      setTopics(newTopics);
      setMode('READ');
    }}></Update>;
  }



  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={function (id) {
        setMode('READ');
        setId(id);
      }}></Nav>



      {content}


      <ul>

        <li>     
          <a href="/create" onClick={ (event) => {
          event.preventDefault();
          setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>




    </div>
  );
}

export default App;