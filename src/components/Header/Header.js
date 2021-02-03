import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "./../Switch/Switch";
import { GlobalContext } from "../../contexts/globalContext";

function Header({ logo }) {
  const { isDark, handleDarkMode } = useContext(GlobalContext);
  return (
    <div className="bg-blue-600 dark:bg-green-600 flex justify-between items-center py-6 px-4">
      <h1 className="font-black text-2xl text-white">{logo}</h1>
      <div className="flex items-center">
        <FontAwesomeIcon icon="sun" className="text-white" />
        <Switch
          switchState={isDark}
          bgColor="bg-white"
          switchColor={isDark ? "bg-green-600" : "bg-blue-600"}
          callback={handleDarkMode}
        />
        <FontAwesomeIcon icon="moon" className="text-white" />
      </div>
    </div>
  );
}

export default Header;
