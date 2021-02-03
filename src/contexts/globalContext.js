import React, { Component } from "react";

const GlobalContext = React.createContext();

class GlobalContextProvider extends Component {
  state = {
    pageLoading: false,
    isDark: !!localStorage.getItem("isThemeDark"),
  };

  handlePageloader = (state) => {
    this.setState({ pageLoading: state });
  };

  handleDarkMode = () => {
    if (localStorage.getItem("isThemeDark")) {
      localStorage.removeItem("isThemeDark");
    } else {
      localStorage.setItem("isThemeDark", "true");
    }
    this.setState((prevState) => {
      return { isDark: !prevState.isDark };
    });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          pageLoading: this.state.pageLoading,
          handlePageloader: this.handlePageloader,
          isDark: this.state.isDark,
          handleDarkMode: this.handleDarkMode,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContextProvider, GlobalContext };
