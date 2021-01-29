import React, { Component } from "react";

class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headwind: null,
    };
    this.temp = 20; // placeholder temp
    this.windSpeed = 20; //placeholder wind
    this.windDirection = 360;
  }

  setHeadwind = (windDirection) => {
    let runwayHeading;
    // rwys at KNSE are 05, 14, 23, and 32
    if (windDirection > 5 && windDirection <= 95) {
      runwayHeading = 50;
    } else if (windDirection > 95 && windDirection <= 185) {
      runwayHeading = 140;
    } else if (windDirection > 185 && windDirection <= 275) {
      runwayHeading = 230;
    } else {
      runwayHeading = 320;
    }
    // Math.cos uses radians. Conversion is Radians = Angle in degrees x PI / 180.
    let windRadian = windDirection * Math.PI / 180;
    let runwayRadian = runwayHeading * Math.PI / 180;
    this.setState({
      headwind: Math.trunc(Math.cos(Math.abs(windRadian - runwayRadian)) * this.windSpeed),
    });
  }

  componentDidMount() {
    this.setHeadwind(this.windDirection);
  }

  render() {
    return (
      <React.Fragment>
        <section className={`section container1`}>
          <div className="container">
            <h1 className="title">TOLD</h1>
          </div>
          <div>
            Headwind: {this.state.headwind}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Told;
