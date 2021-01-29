import "./App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Jobs from "../Jobs/Jobs";
import Pageloader from "../Pageloader/Pageloader";
import { JobContextProvider } from "../../contexts/jobContext";
import { PageloaderContextProvider } from "../../contexts/pageloaderContext";

function App() {
  return (
    <JobContextProvider>
      <div
        className={`App ${localStorage.getItem("isThemeDark") ? "dark" : ""}`}
      >
        <PageloaderContextProvider>
          <Pageloader />
          <div className="container">
            <Header logo="devjobs"></Header>
            <Search />
            <Jobs limit="10"></Jobs>
          </div>
        </PageloaderContextProvider>
      </div>
    </JobContextProvider>
  );
}

export default App;
