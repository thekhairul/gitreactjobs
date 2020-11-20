import "./App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";

function App() {
  return (
    <div className={`App ${localStorage.getItem('isThemeDark') ? 'dark' : ''}`}>
      <div className="container">
        <Header logo="devjobs"></Header>
        <Search />
      </div>
    </div>
  );
}

export default App;
