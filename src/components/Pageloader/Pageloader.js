import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pageloader = () => {
  const { pageLoading } = useContext(GlobalContext);
  if (pageLoading) {
    return (
      <div className="fixed inset-0 bg-white opacity-75 z-50 flex items-center justify-center">
        <FontAwesomeIcon spin icon="circle-notch" className="text-5xl" />
      </div>
    );
  } else {
    return null;
  }
};

export default Pageloader;
