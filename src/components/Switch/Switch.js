import { useState } from "react";

function Switch({ bgColor, switchColor }) {
  const [isSwitchOn, setSwitch] = useState(false);

  const toggleSwitch = () => {
    setSwitch(!isSwitchOn);
  };

  return (
    <div
      className={`h-8 w-16 p-1 mx-2 rounded-3xl cursor-pointer ${
        bgColor || ""
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`duration-200 ease-in-out h-6 origin-center rounded-full transform transition-transform ${
          isSwitchOn ? "translate-x-8" : ""
        } w-6 ${switchColor || ""}`}
      ></div>
    </div>
  );
}

export default Switch;
