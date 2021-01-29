import React, { Component } from "react";

const PageloaderContext = React.createContext();

class PageloaderContextProvider extends Component {
  state = {
    loading: false,
  };

  handlePageloader = (state) => {
    this.setState({ loading: state });
  };

  render() {
    return (
      <PageloaderContext.Provider
        value={{
          loading: this.state.loading,
          handlePageloader: this.handlePageloader,
        }}
      >
        {this.props.children}
      </PageloaderContext.Provider>
    );
  }
}

export { PageloaderContextProvider, PageloaderContext };
