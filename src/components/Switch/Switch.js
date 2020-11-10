import { useState } from "react";

function Switch({bgColor,switchColor}) {
    const [isSwitchOn, toggleSwitch] = useState(false);
    return (
        <div className={`flex ${isSwitchOn ? 'justify-end' : 'justify-start'} h-8 w-16 p-1 rounded-3xl ${bgColor || ''}`} onClick="">
            <div className={`h-6 w-6 rounded-full ${switchColor || ''}`}></div>
        </div>
    );
}

export default Switch;