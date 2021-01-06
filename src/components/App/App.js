import "./App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Jobs from "../Jobs/Jobs";

function App() {
  return (
    <div className={`App ${localStorage.getItem("isThemeDark") ? "dark" : ""}`}>
      <div className="container">
        <Header logo="devjobs"></Header>
        <Search />
        <Jobs limit="10"></Jobs>
      </div>
    </div>
  );
}

export default App;
