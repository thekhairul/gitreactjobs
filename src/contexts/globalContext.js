import React, { Component } from "react";

const GlobalContext = React.createContext();

class GlobalContextProvider extends Component {
  state = {
    pageLoading: false,
  };

  handleGlobal = (state) => {
    this.setState({ pageLoading: state });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          pageLoading: this.state.pageLoading,
          handleGlobal: this.handleGlobal,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContextProvider, GlobalContext };
