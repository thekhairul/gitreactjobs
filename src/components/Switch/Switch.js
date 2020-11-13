import { useState } from "react";

function Switch({ bgColor, switchColor, callback }) {
  const [isSwitchOn, setSwitch] = useState(false);

  const handleSwitch = () => {
    setSwitch(!isSwitchOn);
    callback && callback();
  };

  return (
    <div
      className={`h-6 w-12 p-1 mx-2 rounded-3xl cursor-pointer ${
        bgColor || ""
      }`}
      onClick={handleSwitch}
    >
      <div
        className={`duration-200 ease-in-out h-4 w-4 origin-center rounded-full transform transition-transform ${
          isSwitchOn ? "translate-x-6" : ""
        } ${switchColor || ""}`}
      ></div>
    </div>
  );
}

export default Switch;
