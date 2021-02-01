import "../../App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Jobs from "../Jobs/Jobs";
import Pageloader from "../Pageloader/Pageloader";
import { JobContextProvider } from "../../contexts/jobContext";
import { GlobalContextProvider } from "../../contexts/globalContext";

function App() {
  return (
    <JobContextProvider>
      <div
        className={`App ${localStorage.getItem("isThemeDark") ? "dark" : ""}`}
      >
        <GlobalContextProvider>
          <Pageloader />
          <div className="container mx-auto">
            <Header logo="devjobs"></Header>
            <Search />
            <Jobs limit="10"></Jobs>
          </div>
        </GlobalContextProvider>
      </div>
    </JobContextProvider>
  );
}

export default App;
