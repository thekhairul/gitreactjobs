import "./App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header logo="devjobs"></Header>
        <Search />
      </div>
    </div>
  );
}

export default App;
