import Header from "../Header/Header";
import Search from "../Search/Search";
import Jobs from "../Jobs/Jobs";

function Home() {
  return (
    <div className="home">
      <Header logo="devjobs"></Header>
      <Search />
      <Jobs limit="10"></Jobs>
    </div>
  );
}

export default Home;
