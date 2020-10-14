import React, { Component } from "react";

class GougePage extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {
    return (
      <React.Fragment>
       <section className={`section container1`}>
    <div className="container">
      <h1 className="title">
       Gouge Page
      </h1>
      <p className="subtitle">
        gouge!
      </p>
    </div>
  </section>
      </React.Fragment>
    );

  }
}

  export default GougePage;
