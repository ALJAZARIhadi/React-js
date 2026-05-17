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
          personName="Ahmed"
          email="ahmed@gmail.com"
          age="20"
        />
        <Article
          Content={secondArticle}
          personName="Hadi"
          email="hadi@gmail.com"
          age="25"
        />
        <Article personName="Omer" email="omer@gmail.com" age="24" />

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
