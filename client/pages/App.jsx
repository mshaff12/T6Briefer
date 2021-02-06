import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import NavBar from "../components/NavBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
