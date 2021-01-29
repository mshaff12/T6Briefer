import React, { Component } from "react";
import axios from 'axios';

class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headwind: null,
    };
    this.temperatureKNSE;
    this.windSpeedKNSE;
    this.windDirectionKNSE;
    this.windDirectionKNGP;
  }

  setHeadwindKNSE = (windDirection, windSpeed) => {
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
      headwind: Math.trunc(Math.cos(Math.abs(windRadian - runwayRadian)) * windSpeed),
    });
  }

  componentDidMount() {
    axios
      .get("getWeatherDataKNSE", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("here: ", res);
        this.temperatureKNSE = res.data.temperature.value;
        this.windSpeedKNSE = res.data.wind_speed.value;
        this.windDirectionKNSE = res.data.wind_direction.value;
        this.setHeadwindKNSE(this.windDirectionKNSE, this.windSpeedKNSE);
      });

    axios
      .get("getWeatherDataKNGP", {
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
          <div>
            Headwind: {this.state.headwind}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Told;
