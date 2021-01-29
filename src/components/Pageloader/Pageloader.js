import { useContext } from "react";
import { PageloaderContext } from "../../contexts/pageloaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pageloader = () => {
  const { loading } = useContext(PageloaderContext);
  if (loading) {
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
