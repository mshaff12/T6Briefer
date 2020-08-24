import React, { Component } from "react";
import ReactDOM from "react-dom";
import Rename from "./components/rename";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {


  return (
   <React.Fragment>
     <Rename />
   </React.Fragment>
  )
 }
}

export default App;
