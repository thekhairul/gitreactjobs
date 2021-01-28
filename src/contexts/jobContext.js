import React, { Component } from "react";

const JobContext = React.createContext();

class JobContextProvider extends Component {
  state = {
    joblist: {},
  };

  updateJoblist = (jobs) => {
    this.setState({ joblist: jobs });
  };

  render() {
    return (
      <JobContext.Provider
        value={{
          joblist: this.state.joblist,
          updateJoblist: this.updateJoblist,
        }}
      >
        {this.props.children}
      </JobContext.Provider>
    );
  }
}

export { JobContextProvider, JobContext };
