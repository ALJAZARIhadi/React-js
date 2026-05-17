import logo from "./logo.svg";
import "./App.css";
//import MyFirstComponent from "./Coponents/MyFirstComponent"
import Article from "./Coponents/Article";
function App() {
  const fitsArticle = `
  sdfdkfj
  dkjsljkfjdfsdkflj`;
  const secondArticle = `sdfkdl  
  sdflkjldskj 
  kjdflkjkj`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>
        <h1>Khawarezmi Academy</h1>
        <Article
          Content={fitsArticle}
          PersonName="Ahmed"
          email="ahmed@gmail.com"
          age="20"
        >
          <h1>Hello World</h1>
        </Article>
        <Article
          Content={secondArticle}
          PersonName="Hadi"
          email="hadi@gmail.com"
          age="25"
        >
          <div style={{ background: "teal" }}>
            <h1>Hello World</h1>
            <p>ijkjg jdkj kj lkdjf</p>
          </div>
        </Article>
        <Article PersonName ="Omer" email="omer@gmail.com" age="24">
          <h5>This is content by jsx sent</h5>
          <hr></hr>
        </Article>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
