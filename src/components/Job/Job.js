import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Job({ logo, since, type, position, company, address }) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-md">
      <img
        src={logo || ""}
        alt=""
        className="h-12 mb-3 object-center object-cover"
      />
      <div className="flex items-center mb-2">
        <span className="text-gray-600">{since}</span>
        <span className="mx-3">
          <FontAwesomeIcon icon="circle" className="text-gray-300 text-xs" />
        </span>
        <span className="text-gray-600">{type}</span>
      </div>
      <h3 className="text-black mb-2">{position}</h3>
      <h4 className="text-gray-600 text-lg mb-3">{company}</h4>
      <h6 className="text-blue-600">{address}</h6>
    </div>
  );
}

export default Job;
