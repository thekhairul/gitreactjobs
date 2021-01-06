import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "./../Switch/Switch";

function Header({ logo }) {
  return (
    <div className="bg-blue-600 dark:bg-green-600 flex justify-between items-center py-6 px-4">
      <h1 className="font-black text-2xl text-white">{logo}</h1>
      <div className="flex items-center">
        <FontAwesomeIcon icon="sun" className="text-white" />
        <Switch
          switchState={localStorage.getItem("isThemeDark")}
          bgColor="bg-white"
          switchColor="bg-blue-600"
          callback={() => {
            if (localStorage.getItem("isThemeDark")) {
              localStorage.removeItem("isThemeDark");
            } else {
              localStorage.setItem("isThemeDark", "true");
            }
          }}
        />
        <FontAwesomeIcon icon="moon" className="text-white" />
      </div>
    </div>
  );
}

export default Header;
