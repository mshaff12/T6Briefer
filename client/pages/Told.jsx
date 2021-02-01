import React, { Component } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["05", "14", "23", "32"];

const defaultOption = options[0];

const options2 = ["??", "??", "??", "??"];

const defaultOption2 = options2[0];

class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headwind: null,
      KNSEMetar: "",
      KNGPMetar: "",
      toldModalActive: "",
    };
    this.temperatureKNSE;
    this.windSpeedKNSE;
    this.windDirectionKNSE;
    this.windDirectionKNGP;
  }

  // 1) update runways for corpus in the drop down
  // 2) write a function that uses the wind data to display the only 2 possible runways in the drop down (or just leave all 4)
  // 3) create state variables for both runway drop downs
  // 4) write onClick functions for the drop downs which set the state

  // 5) add a state variable for each told data, as well as each manual entry input
  // 6) write onChange functions for the manual entry inputs which sets the respective states
  // 7) write functions which use the weather API to calculate each told data, and use setState to update them
  // 8) call your functions in componentDidMount (make sure you call after the API loads the data)
  // 9) replace all the 'data' text on the page to be 'this.state.whateverStateNameYouMade'

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
    let windRadian = (windDirection * Math.PI) / 180;
    let runwayRadian = (runwayHeading * Math.PI) / 180;
    this.setState({
      headwind: Math.trunc(
        Math.cos(Math.abs(windRadian - runwayRadian)) * windSpeed
      ),
    });
    this.activateToldModal = this.activateToldModal.bind(this);
    this.exitToldModal = this.exitToldModal.bind(this);
  };

  activateToldModal() {
    this.setState({
      toldModalActive: "is-active",
    });
  }

  exitToldModal() {
    this.setState({
      toldModalActive: "",
    });
  }

  componentDidMount() {
    axios
      .get("https://t6briefer.com/getWeatherDataKNSE", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("KNSE Data: ", res);
        this.temperatureKNSE = res.data.temperature.value;
        this.windSpeedKNSE = res.data.wind_speed.value;
        this.windDirectionKNSE = res.data.wind_direction.value;
        this.setHeadwindKNSE(this.windDirectionKNSE, this.windSpeedKNSE);

        this.setState({
          KNSEMetar: res.data.sanitized,
        });
      });

    axios
      .get("https://t6briefer.com/getWeatherDataKNGP", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("KNGP Data: ", res);

        this.setState({
          KNGPMetar: res.data.sanitized,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <section className={`section container1`}>
          <div className="container">
            <h1 className="title">TOLD</h1>
            <h2 className="metarTitle">NAS WHITING FIELD</h2>

            <div className="KNSEMetar">{this.state.KNSEMetar}</div>

            <div className="toldForRunway">
              <span className="toldForRunwayText">TOLD FOR RUNWAY</span>
              <span>
                <Dropdown
                  options={options}
                  onChange={this._onSelect}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </span>
            </div>

            <div className="smallerText">
              MIN TORQUE AT 60 KIAS:<span className="toldData">{`data`}</span>
            </div>
            <div className="smallerText">
              TAKEOFF DISTANCE (FLAPS T/O):
              <span className="toldData">{`data`}</span>
            </div>
            <div className="smallerText">
              MAX DRY ABORT SPEED:<span className="toldData">{`data`}</span>
            </div>
            <div className="smallerText marginBottomTold">
              MAX WET ABORT SPEED:<span className="toldData">{`data`}</span>
            </div>

            <h2 className="metarTitle">NAS CORPUS CHRISTI</h2>
            <div className="KNGPMetar">{this.state.KNGPMetar}</div>

            <div className="toldForRunway">
              <span className="toldForRunwayText">TOLD FOR RUNWAY</span>
              <span>
                <Dropdown
                  options={options2}
                  onChange={this._onSelect2}
                  value={defaultOption2}
                  placeholder="Select an option"
                />
              </span>
            </div>

            <div className="smallerText">
              MIN TORQUE AT 60 KIAS:<span className="toldData">{`data`}</span>
            </div>
            <div className="smallerText">
              TAKEOFF DISTANCE (FLAPS T/O):
              <span className="toldData">{`data`}</span>
            </div>
            <div className="smallerText">
              MAX DRY ABORT SPEED:<span className="toldData">{`data`}</span>
            </div>
            <div className="smallerText marginBottomTold">
              MAX WET ABORT SPEED:<span className="toldData">{`data`}</span>
            </div>

            <h2 className="metarTitle">MANUAL ENTRY</h2>

            <div className="smallerText">
              TEMPERATURE(°C):
              <input
                className="input toldDataInputFields is-small"
                type="text"
                placeholder="Ex: 15"
              ></input>
            </div>
            <div className="smallerText">
              WIND DIRECTION:{" "}
              <input
                className="input toldDataInputFields is-small"
                type="text"
                placeholder="Ex: 120"
              ></input>
            </div>
            <div className="smallerText">
              WIND SPEED:{" "}
              <input
                className="input toldDataInputFields is-small"
                type="text"
                placeholder="Ex: 10"
              ></input>
            </div>
            <div className="smallerText marginBottomTold">
              RUNWAY HEADING:{" "}
              <input
                className="input toldDataInputFields is-small"
                type="text"
                placeholder="Ex: 230"
              ></input>
            </div>

            <button
              onClick={this.activateToldModal}
              className="calculateToldButton button is-info"
            >
              calculate
            </button>

            <div className={`modal ${this.state.toldModalActive}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">TOLD MANUAL ENTRY</p>
                  <button
                    onClick={this.exitToldModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section className="modal-card-body">
                  <div className="smallerText">
                    MIN TORQUE AT 60 KIAS:
                    <span className="toldData">{`data`}</span>
                  </div>
                  <div className="smallerText">
                    TAKEOFF DISTANCE (FLAPS T/O):
                    <span className="toldData">{`data`}</span>
                  </div>
                  <div className="smallerText">
                    MAX DRY ABORT SPEED:
                    <span className="toldData">{`data`}</span>
                  </div>
                  <div className="smallerText marginBottomTold">
                    MAX WET ABORT SPEED:
                    <span className="toldData">{`data`}</span>
                  </div>
                </section>
                <footer className="modal-card-foot">
                  <button
                    onClick={this.exitToldModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Told;
