import React, { Component } from "react";
import axios from "axios";

class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://www.aviationweather.gov/cgi-bin/json/MetarJSON.php", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("here: ", res);
      });
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
