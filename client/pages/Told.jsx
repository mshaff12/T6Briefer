import React, { Component } from "react";
/* this is a test */
class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className={`section container1`}>
          <div className="container">
            <h1 className="title">TOLD</h1>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Told;
