import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <form className="bg-white flex rounded-lg shadow-md">
      <div className="p-4 flex flex-grow items-center border-r">
        <FontAwesomeIcon icon="search" className="text-blue-600 mr-3" />
        <input type="text" placeholder="Filter by title, company ..." />
      </div>
      <div className="p-4 flex items-center border-r">
        <FontAwesomeIcon icon="map-marker-alt" className="text-blue-600 mr-3" />
        <input type="text" placeholder="Filter by location..." />
      </div>
      <div className="p-4 flex items-center">
        <label htmlFor="fulltime" className="mr-3">
          <FontAwesomeIcon icon="square" className="text-gray-400 mr-3" />
          <input type="checkbox" className="hidden" id="fulltime" />
          Full-time only
        </label>
        <button
          type="submit"
          className="bg-blue-600 px-8 py-3 rounded-md text-center text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
