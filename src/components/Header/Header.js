import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "./../Switch/Switch";

function Header({ logo }) {
  return (
    <div className="bg-blue-600 flex justify-between items-center py-6 px-4">
      <h1 className="font-black text-2xl text-white">{logo}</h1>
      <div className="flex items-center">
        <FontAwesomeIcon icon="sun" className="text-white" />
        <Switch
          bgColor="bg-white"
          switchColor="bg-blue-600"
          callback={() => {
            localStorage.setItem(
              "isThemeDark",
              localStorage.getItem("isThemeDark") === "yes" ? "no" : "yes"
            );
          }}
        />
        <FontAwesomeIcon icon="moon" className="text-white" />
      </div>
    </div>
  );
}

export default Header;
