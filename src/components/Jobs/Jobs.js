import Job from "./../Job/Job.js";
import { useContext } from "react";
import { JobContext } from "../../contexts/jobContext";

function Jobs({ limit }) {
  const { joblist } = useContext(JobContext);
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
  console.log(joblist);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobItems}
    </ul>
  );
}

export default Jobs;
