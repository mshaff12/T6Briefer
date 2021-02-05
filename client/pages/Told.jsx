import React, { Component } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { ThemeProvider } from "react-bootstrap";
import { speed } from "jquery";

const options = ["05", "14", "23", "32"];

const defaultOption = options[0];

const options2 = ["04", "13L", "13R", "18", "22", "31L", "31R", "36"];

const defaultOption2 = options2[0];

class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headwind: 10,
      runwayHeading: 32,
      stringHeading: "32",
      KNSEMetar: "",
      KNGPMetar: "",
      toldModalActive: "",
      maxAbortDryKNSE: null,
      maxAbortWetKNSE: null,
      metarLoadingKNSE: true,
      metarLoadingKNGP: true,
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

  setHeadwindKNSE = (windDirection, windSpeed, runwayHeading) => {
    /*let runwayHeading;
    // rwys at KNSE are 05, 14, 23, and 32
    if (windDirection > 5 && windDirection <= 95) {
      runwayHeading = 50;
    } else if (windDirection > 95 && windDirection <= 185) {
      runwayHeading = 140;
    } else if (windDirection > 185 && windDirection <= 275) {
      runwayHeading = 230;
    } else {
      runwayHeading = 320;
    } */

    // Math.cos uses radians. Conversion is Radians = Angle in degrees x PI / 180.
    let windRadian = (windDirection * Math.PI) / 180;
    let runwayRadian = (runwayHeading * Math.PI) / 180;
    this.setState({
      headwind: Math.floor(
        Math.cos(Math.abs(windRadian - runwayRadian)) * windSpeed
      ),
    });
    this.activateToldModal = this.activateToldModal.bind(this);
    this.exitToldModal = this.exitToldModal.bind(this);
  };

  maxAbortSpeed = (headwind, temperature, stringHeading) => {
    // Need to add try {} catch{] to program to account for out of limits entry
    // I tried adding isNaN() for temperature and headwind, but it didn't work
    if (temperature > 50 || temperature < 0 ||
        headwind > 40 || headwind < -20) {
      throw "Input is out of limits.";
    }
    let speedCacheDry;
    let speedCacheWet;
    if (
      stringHeading == "22" ||
      stringHeading == "04" ||
      stringHeading == "18" ||
      stringHeading == "36" ||
      stringHeading == "13L" ||
      stringHeading == "31R"
    ) {
      //runwayDistance = 5000
      speedCacheDry = [
        [71, 86, 100, 104, 107, 110, 114],
        [70, 84, 98, 101, 104, 107, 110],
        [68, 80, 94, 97, 100, 104, 108],
        [60, 72, 90, 94, 97, 101, 104],
        [59, 73,	88,	91,	94,	98,	102],
        [58, 71,	86,	89,	92,	96,	100]
      ];
      speedCacheWet = [
        [49, 60,	72,	76,	77,	78,	84],
        [48, 59,	70,	75,	76,	77,	78],
        [46, 56,	68,	70,	72,	76,	77],
        [40, 54,	62,	68,	70,	75,	76],
        [38, 54,	60,	67,	68,	70,	74],
        [36, 52,	60,	62,	67,	68,	72]
      ];
    } else if (stringHeading == "13R" || stringHeading == "31L") {
      speedCacheDry = [
        [101, 115, 130,	133, 136,	139, 142],
        [94, 110,	122, 125,	128, 131,	134],
        [90, 102,	118, 120,	123, 127,	130],
        [88, 101,	116, 119,	122, 125, 128],
        [84, 98, 112, 115, 118, 122, 125],
        [80, 95, 110, 113, 116, 120, 123]
      ];
      speedCacheWet = [
        [75, 85, 100, 105, 106, 108, 110],
        [68, 78, 95, 97, 99, 102, 106],
        [62, 76, 87, 88, 96, 97, 100],
        [60, 75, 86, 87, 95, 97, 99],
        [59, 72, 82, 85, 87, 95, 97],
        [56, 68, 78, 84, 86, 88, 96]
      ];
      //runwayDistance = 8000
    } else {
      //runwayDistance = 6000
      speedCacheDry = [
        [84, 100, 108, 110, 112, 116, 120],
        [74, 88, 102, 105, 109, 112, 116],
        [71, 84, 98, 100, 104, 108, 110],
        [69, 80, 96, 99, 102, 106, 109],
        [69, 80, 95, 98, 102, 105, 109],
        [69, 80, 94, 97, 101, 104, 108]
      ];
      speedCacheWet = [
        [60, 72, 77, 78, 82, 86, 88],
        [54, 60, 76, 77 ,78, 82, 86],
        [52, 59, 70, 72, 76, 77, 78],
        [47, 56, 68, 72, 76, 77, 78],
        [47, 56, 68, 72, 76, 77, 78],
        [47, 56, 68, 70, 75, 76, 77]
      ];
    }
    headwind += 20;
    headwind /= 10;
    temperature /= 10;
    let temperatureIdx1 = Math.floor(temperature);
    let temperatureIdx2 = Math.ceil(temperature);
    let headwindIdx1 = Math.floor(headwind);
    let headwindIdx2 = Math.ceil(headwind);
    let minuend =
      (speedCacheDry[temperatureIdx1][headwindIdx2] -
        speedCacheDry[temperatureIdx1][headwindIdx1]) *
        (headwind - headwindIdx1) +
      speedCacheDry[temperatureIdx1][headwindIdx1];
    let subtrahend =
      (speedCacheDry[temperatureIdx2][headwindIdx2] -
        speedCacheDry[temperatureIdx2][headwindIdx1]) *
        (headwind - headwindIdx1) +
      speedCacheDry[temperatureIdx2][headwindIdx1];
    let maxAbort =
      (minuend - subtrahend) * (temperature - temperatureIdx1) + subtrahend;
    this.setState({
      maxAbortDryKNSE: Math.ceil(maxAbort),
    });

    temperatureIdx1 = Math.floor(temperature);
    temperatureIdx2 = Math.ceil(temperature);
    headwindIdx1 = Math.floor(headwind);
    headwindIdx2 = Math.ceil(headwind);
    minuend =
      (speedCacheWet[temperatureIdx1][headwindIdx2] -
        speedCacheWet[temperatureIdx1][headwindIdx1]) *
        (headwind - headwindIdx1) +
      speedCacheWet[temperatureIdx1][headwindIdx1];
    subtrahend =
      (speedCacheWet[temperatureIdx2][headwindIdx2] -
        speedCacheWet[temperatureIdx2][headwindIdx1]) *
        (headwind - headwindIdx1) +
      speedCacheWet[temperatureIdx2][headwindIdx1];
    maxAbort =
      (minuend - subtrahend) * (temperature - temperatureIdx1) + subtrahend;
    this.setState({
      maxAbortWetKNSE: Math.ceil(maxAbort),
    });

  }

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
      .get("getWeatherDataKNSE", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("KNSE Data: ", res);
        this.temperatureKNSE = res.data.temperature.value;
        console.log(this.temperatureKNSE);
        this.windSpeedKNSE = res.data.wind_speed.value;
        this.windDirectionKNSE = res.data.wind_direction.value;
        this.setHeadwindKNSE(
          this.windDirectionKNSE,
          this.windSpeedKNSE,
          this.state.runwayHeading
        );
        this.setState({
          KNSEMetar: res.data.sanitized,
          metarLoadingKNSE: false,
        });
        //this.maxAbortSpeed(this.state.headwind, this.temperatureKNSE, 23);
        this.maxAbortSpeed(15, 25, "32"); // test example
      });

    axios
      .get("getWeatherDataKNGP", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("KNGP Data: ", res);

        this.setState({
          KNGPMetar: res.data.sanitized,
          metarLoadingKNGP: false,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <section className={`section container1`}>
          <div className="container">
            <h1 className="title">TOLD</h1>
            <h1>{this.state.maxAbortDryKNSE}</h1>
            <h1>{this.state.maxAbortWetKNSE}</h1>
            <h1>{`headwind: ${this.state.headwind}`}</h1>
            <h3 className="earlyAccess">*BUILD IN PROGRESS*</h3>
            <h2 className="metarTitle">NAS WHITING FIELD</h2>

            <div className="metarWrapperDiv">
              {this.state.metarLoadingKNSE ? (
                <i className="fa fa-spinner fa-spin fa-2x"></i>
              ) : (
                <div className="KNSEMetar">{this.state.KNSEMetar}</div>
              )}
            </div>

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
              MAX DRY ABORT SPEED:<span className="toldData">{`${this.state.maxAbortDryKNSE} KIAS`}</span>
            </div>
            <div className="smallerText marginBottomTold">
              MAX WET ABORT SPEED:<span className="toldData">{`${this.state.maxAbortWetKNSE} KIAS`}</span>
            </div>

            <h2 className="metarTitle">NAS CORPUS CHRISTI</h2>

            <div className="metarWrapperDiv">
              {this.state.metarLoadingKNGP ? (
                <i className="fa fa-spinner fa-spin fa-2x"></i>
              ) : (
                <div className="KNGPMetar">{this.state.KNGPMetar}</div>
              )}
            </div>

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
