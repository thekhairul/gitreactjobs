import Header from "../Header/Header";
import Search from "../Search/Search";
import Jobs from "../Jobs/Jobs";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

function Container() {
  const { isDark } = useContext(GlobalContext);
  return (
    <div className={`container mx-auto ${isDark ? "dark" : ""}`}>
      <Header logo="devjobs"></Header>
      <Search />
      <Jobs limit="10"></Jobs>
    </div>
  );
}

export default Container;
