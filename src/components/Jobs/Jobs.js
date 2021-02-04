import Job from "./../Job/Job.js";
import { useContext, useEffect } from "react";
import { JobContext } from "../../contexts/jobContext";
import { GlobalContext } from "../../contexts/globalContext";
import axios from "axios";

function Jobs({ limit }) {
  const { joblist, updateJoblist } = useContext(JobContext);
  const { handlePageloader } = useContext(GlobalContext);

  const jobItems = joblist.map((el, idx) => (
    <Job
      key={idx}
      logo={el.company_logo}
      since={new Date(el.created_at).toLocaleString()}
      type={el.type}
      position={el.title}
      company={el.company}
      address={el.location}
    ></Job>
  ));
  useEffect(() => {
    handlePageloader(true);
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
      )
      .then((res) => {
        updateJoblist(res.data);
        handlePageloader(false);
      })
      .catch((err) => {
        console.log(err);
        handlePageloader(false);
      });
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobItems}
    </ul>
  );
}

export default Jobs;
