import logo from './logo.svg';
import './App.css';
// 함수형 컴포넌트
function Header(props) {
  console.log('props',props, props.title);
  return <header>
     <h1><a href='/'>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = [
    <li><a href='/read/1'>html</a></li>,
    <li><a href='/read/1'>css</a></li>,
    <li><a href='/read/1'>js</a></li>
  ]
  for(let i=0; i <props.topics; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href>{'/read/'+t.id}</a>{t.title}</li>)
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

function App() {
  const topics = [
   {id: 1, title: 'html', body: 'html is...'},
   {id: 2, title: 'css', body: 'css is...'},
   {id: 3, title: 'javascript', body: 'javascript is...'}
  ]
  return (
    <div>
    <Header title="REACT"></Header>
    <Header></Header>
    <Header></Header>
    <Nav topics="{topics}"></Nav>
    <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
