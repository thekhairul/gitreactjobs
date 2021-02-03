import "../../App.css";
import Pageloader from "../Pageloader/Pageloader";
import Container from "../Container/Container";
import { JobContextProvider } from "../../contexts/jobContext";
import { GlobalContextProvider } from "../../contexts/globalContext";

function App() {
  return (
    <JobContextProvider>
      <GlobalContextProvider className="App">
        <GlobalContextProvider>
          <Pageloader />
          <Container />
        </GlobalContextProvider>
      </GlobalContextProvider>
    </JobContextProvider>
  );
}

export default App;
