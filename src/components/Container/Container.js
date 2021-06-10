import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";

function Container() {
  const { isDark } = useContext(GlobalContext);
  return (
    <div className={`container mx-auto ${isDark ? "dark" : ""}`}>
      <Home />
    </div>
  );
}

export default Container;
