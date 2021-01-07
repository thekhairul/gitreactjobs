import Job from "./../Job/Job.js";

function Jobs({ limit }) {
  const jobItems = [...Array(parseInt(limit)).keys()].map((el, idx) => (
    <Job
      key={idx}
      since="5h ago"
      type="Full time job"
      position="Software Engineer"
      company="Gitlab"
      address="Columbus, OH"
    ></Job>
  ));
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobItems}
    </ul>
  );
}

export default Jobs;
