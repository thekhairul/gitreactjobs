import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

function Search() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);

  const toggleFulltime = (e) => {
    setFulltime(e.target.checked);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    const corsAnywhereProxy = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        `${corsAnywhereProxy}https://jobs.github.com/positions.json?description=${description}&location=${location
          .split(" ")
          .join("+")}&full_time=${fulltime}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="bg-white flex rounded-lg shadow-md mb-10"
      onSubmit={submitSearch}
    >
      <div className="p-4 flex flex-grow items-center border-r">
        <FontAwesomeIcon icon="search" className="text-blue-600 mr-3" />
        <input
          type="text"
          className="w-full"
          placeholder="Filter by title, company ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="p-4 flex items-center border-r">
        <FontAwesomeIcon icon="map-marker-alt" className="text-blue-600 mr-3" />
        <input
          type="text"
          className="w-full"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="p-4 flex items-center">
        <label htmlFor="fulltime" className="mr-3 cursor-pointer">
          <FontAwesomeIcon
            icon={fulltime ? "check-square" : "square"}
            className="text-gray-600 mr-3"
          />
          <input
            type="checkbox"
            className="hidden"
            id="fulltime"
            onChange={toggleFulltime}
          />
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
