import React, { Component } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { ThemeProvider } from "react-bootstrap";
import { speed } from "jquery";

const options = ["05", "14", "23", "32"];

const defaultOption = "  ";

const options2 = ["04", "13L", "13R", "18", "22", "31L", "31R", "36"];

const defaultOption2 = "  ";

class Told extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missingInputText: "hide",
      headwindKNSE: null,
      headwindKNGP: null,
      headwindManual: null,
      runwayHeadingKNSE: null,
      runwayHeadingKNGP: null,
      KNSEMetar: "",
      KNGPMetar: "",
      toldModalActive: "",
      maxAbortDryKNSE: null,
      maxAbortWetKNSE: null,
      maxAbortDryKNGP: null,
      maxAbortWetKNGP: null,
      maxAbortDryManual: null,
      maxAbortWetManual: null,
      minPower60KNSE: "",
      minPower60KNGP: "",
      minPowerManual: null,
      metarLoadingKNSE: true,
      metarLoadingKNGP: true,
      takeoffDistKNSE: null,
      takeoffDistKNGP: null,
      takeoffDistManual: null,
      toldData1: "toldData",
      toldData2: "toldData",
      selectedKNSE: false,
      selectedKNGP: false,
      temperatureManual: null,
      windDirectionManual: null,
      windSpeedManual: null,
      runwayHeadingManual: null,
      runwayLengthManual: null,
      inputOutOfLimitsMessage: "hide",
      inputOutOfLimitsMessage2: "hide",
    };
    this.temperatureKNSE;
    this.windSpeedKNSE;
    this.windDirectionKNSE;
    this.temperatureKNGP;
    this.windSpeedKNGP;
    this.windDirectionKNGP;

    this.activateToldModal = this.activateToldModal.bind(this);
  }

  // 3) create state variables for both runway drop downs
  // 4) write onClick functions for the drop downs which set the state

  // 6) write onChange functions for the manual entry inputs which sets the respective states
  // 7) write functions which use the weather API to calculate each told data, and use setState to update them
  // 8) call your functions in componentDidMount (make sure you call after the API loads the data)
  // 9) replace all the 'data' text on the page to be 'this.state.whateverStateNameYouMade'

  setHeadwindKNSE = (windDirection, windSpeed, runwayHeading) => {
    // Math.cos uses radians. Conversion is Radians = Angle in degrees x PI / 180.
    let windRadian = (windDirection * Math.PI) / 180;
    let runwayRadian = (runwayHeading * Math.PI) / 180;
    this.setState(
      {
        headwindKNSE: Math.floor(
          Math.cos(Math.abs(windRadian - runwayRadian)) * windSpeed
        ),
      },
      () => {
        console.log("Headwind Updated ", this.state.headwindKNSE);
        if (this.state.runwayHeadingKNSE) {
          this.maxAbortSpeedKNSE(
            this.state.headwindKNSE,
            this.temperatureKNSE,
            this.state.runwayHeadingKNSE
          );
          // this.takeoffDistKNSE(this.state.headwindKNSE, this.temperatureKNSE);
          // this.minPower60KNSE(this.temperatureKNSE);
        }
      }
    );
    // this.activateToldModal = this.activateToldModal.bind(this);
    // this.exitToldModal = this.exitToldModal.bind(this);

    var doneLoading =
      this.state.selectedKNSE &&
      !this.state.takeoffDistKNSE &&
      !this.state.maxAbortDryKNSE &&
      !this.state.maxAbortWetKNSE
        ? "fa fa-spinner fa-spin"
        : "toldData";

    this.setState({
      toldData1: "toldData",
      inputOutOfLimitsMessage: "hide",
    });
  };

  setHeadwindKNGP = (windDirection, windSpeed, runwayHeading) => {
    // Math.cos uses radians. Conversion is Radians = Angle in degrees x PI / 180.
    let windRadian = (windDirection * Math.PI) / 180;
    let runwayRadian = (runwayHeading * Math.PI) / 180;
    this.setState(
      {
        headwindKNGP: Math.floor(
          Math.cos(Math.abs(windRadian - runwayRadian)) * windSpeed
        ),
        inputOutOfLimitsMessage2: "hide",
      },
      () => {
        if (this.state.runwayHeadingKNGP) {
          this.maxAbortSpeedKNGP(
            this.state.headwindKNGP,
            this.temperatureKNGP,
            this.state.runwayHeadingKNGP
          );
          // this.takeoffDistKNGP(this.state.headwindKNGP, this.temperatureKNGP);
          // this.minPower60KNGP(this.temperatureKNGP);
        }
      }
    );
    console.log("Headwind Updated", this.state.headwindKNGP);
    // this.activateToldModal = this.activateToldModal.bind(this);
    // this.exitToldModal = this.exitToldModal.bind(this);
  };

  setHeadwindManual = (windDirection, windSpeed, runwayHeading) => {
    // Math.cos uses radians. Conversion is Radians = Angle in degrees x PI / 180.
    let windRadian = (windDirection * Math.PI) / 180;
    let runwayRadian = (runwayHeading * Math.PI) / 180;
    this.setState(
      {
        headwindManual: Math.floor(
          Math.cos(Math.abs(windRadian - runwayRadian)) * windSpeed
        ),
      },
      () => {
        console.log("Headwind Updated ", this.state.headwindManual);
        this.maxAbortSpeedManual(
          this.state.headwindManual,
          this.state.temperatureManual,
          this.state.runwayLengthManual
        );
        this.takeoffDistManual(
          this.state.headwindManual,
          this.state.temperatureManual
        );
      }
    );

    // this.activateToldModal = this.activateToldModal.bind(this);
    // this.exitToldModal = this.exitToldModal.bind(this);
  };

  minPower60KNSE = (temperature) => {
    if (temperature <= 42) {
      this.setState({
        minPower60KNSE: 100,
      });
    } else if (temperature <= 43) {
      this.setState({
        minPower60KNSE: 98,
      });
    } else if (temperature <= 44) {
      this.setState({
        minPower60KNSE: 96,
      });
    } else if (temperature <= 45) {
      this.setState({
        minPower60KNSE: 94,
      });
    } else if (temperature <= 46) {
      this.setState({
        minPower60KNSE: 93,
      });
    } else if (temperature <= 47) {
      this.setState({
        minPower60KNSE: 91,
      });
    } else if (temperature <= 48) {
      this.setState({
        minPower60KNSE: 89,
      });
    } else if (temperature <= 49) {
      this.setState({
        minPower60KNSE: 87,
      });
    } else if (temperature <= 50) {
      this.setState({
        minPower60KNSE: 86,
      });
    } else {
      throw "Fuck this guy (or woman), they shouldn't be flying. Temperature exceeds our bounds.";
    }
  };

  minPower60KNGP = (temperature) => {
    if (temperature <= 42) {
      this.setState({
        minPower60KNGP: 100,
      });
    } else if (temperature <= 43) {
      this.setState({
        minPower60KNGP: 98,
      });
    } else if (temperature <= 44) {
      this.setState({
        minPower60KNGP: 96,
      });
    } else if (temperature <= 45) {
      this.setState({
        minPower60KNGP: 94,
      });
    } else if (temperature <= 46) {
      this.setState({
        minPower60KNGP: 93,
      });
    } else if (temperature <= 47) {
      this.setState({
        minPower60KNGP: 91,
      });
    } else if (temperature <= 48) {
      this.setState({
        minPower60KNGP: 89,
      });
    } else if (temperature <= 49) {
      this.setState({
        minPower60KNGP: 87,
      });
    } else if (temperature <= 50) {
      this.setState({
        minPower60KNGP: 86,
      });
    } else {
      throw "Fuck this guy (or woman), they shouldn't be flying. Temperature exceeds our bounds.";
    }
  };

  minPower60Manual = (temperature) => {
    if (temperature <= 42) {
      this.setState({
        minPower60Manual: 100,
      });
    } else if (temperature <= 43) {
      this.setState({
        minPower60Manual: 98,
      });
    } else if (temperature <= 44) {
      this.setState({
        minPower60Manual: 96,
      });
    } else if (temperature <= 45) {
      this.setState({
        minPower60Manual: 94,
      });
    } else if (temperature <= 46) {
      this.setState({
        minPower60Manual: 93,
      });
    } else if (temperature <= 47) {
      this.setState({
        minPower60Manual: 91,
      });
    } else if (temperature <= 48) {
      this.setState({
        minPower60Manual: 89,
      });
    } else if (temperature <= 49) {
      this.setState({
        minPower60Manual: 87,
      });
    } else if (temperature <= 50) {
      this.setState({
        minPower60Manual: 86,
      });
    } else {
      throw "Fuck this guy (or woman), they shouldn't be flying. Temperature exceeds our bounds.";
    }
  };

  maxAbortSpeedKNSE = (headwind, temperature, stringHeading) => {
    // Need to add try {} catch{] to program to account for out of limits entry
    // I tried adding isNaN() for temperature and headwind, but it didn't work
    if (
      temperature > 50 ||
      temperature < 0 ||
      headwind > 40 ||
      headwind < -20
    ) {
      // throw "Input is out of limits.";
      this.setState({
        inputOutOfLimitsMessage: "",
      });
    } else {
      let speedCacheDry;
      let speedCacheWet;
      if (
        stringHeading == "50" ||
        stringHeading == "140" ||
        stringHeading == "320" ||
        stringHeading == "230"
      ) {
        //runway distance = 6000
        speedCacheDry = [
          [84, 100, 108, 110, 112, 116, 120],
          [74, 88, 102, 105, 109, 112, 116],
          [71, 84, 98, 100, 104, 108, 110],
          [69, 80, 96, 99, 102, 106, 109],
          [69, 80, 95, 98, 102, 105, 109],
          [69, 80, 94, 97, 101, 104, 108],
        ];
        speedCacheWet = [
          [60, 72, 77, 78, 82, 86, 88],
          [54, 60, 76, 77, 78, 82, 86],
          [52, 59, 70, 72, 76, 77, 78],
          [47, 56, 68, 72, 76, 77, 78],
          [47, 56, 68, 72, 76, 77, 78],
          [47, 56, 68, 70, 75, 76, 77],
        ];
      } else {
        throw "Invalid Runway";
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
        (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
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
        (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
      this.setState({
        maxAbortWetKNSE: Math.ceil(maxAbort),
      });
      this.takeoffDistKNSE(this.state.headwindKNSE, this.temperatureKNSE);
      this.minPower60KNSE(this.temperatureKNSE);
    }
  };

  maxAbortSpeedKNGP = (headwind, temperature, stringHeading) => {
    // Need to add try {} catch{] to program to account for out of limits entry
    // I tried adding isNaN() for temperature and headwind, but it didn't work
    if (
      temperature > 50 ||
      temperature < 0 ||
      headwind > 40 ||
      headwind < -20
    ) {
      // throw "Input is out of limits.";
      this.setState({
        inputOutOfLimitsMessage2: "",
      });
    } else {
      let speedCacheDry;
      let speedCacheWet;
      if (
        stringHeading == "220" ||
        stringHeading == "40" ||
        stringHeading == "180" ||
        stringHeading == "360" ||
        stringHeading == "130" || // these are going to be invalid
        stringHeading == "310"
      ) {
        //runwayDistance = 5000
        speedCacheDry = [
          [71, 86, 100, 104, 107, 110, 114],
          [70, 84, 98, 101, 104, 107, 110],
          [68, 80, 94, 97, 100, 104, 108],
          [60, 72, 90, 94, 97, 101, 104],
          [59, 73, 88, 91, 94, 98, 102],
          [58, 71, 86, 89, 92, 96, 100],
        ];
        speedCacheWet = [
          [49, 60, 72, 76, 77, 78, 84],
          [48, 59, 70, 75, 76, 77, 78],
          [46, 56, 68, 70, 72, 76, 77],
          [40, 54, 62, 68, 70, 75, 76],
          [38, 54, 60, 67, 68, 70, 74],
          [36, 52, 60, 62, 67, 68, 72],
        ];
      } else if (stringHeading == "131" || stringHeading == "311") {
        // these will be invalid
        //runwayDistance = 8000
        speedCacheDry = [
          [101, 115, 130, 133, 136, 139, 142],
          [94, 110, 122, 125, 128, 131, 134],
          [90, 102, 118, 120, 123, 127, 130],
          [88, 101, 116, 119, 122, 125, 128],
          [84, 98, 112, 115, 118, 122, 125],
          [80, 95, 110, 113, 116, 120, 123],
        ];
        speedCacheWet = [
          [75, 85, 100, 105, 106, 108, 110],
          [68, 78, 95, 97, 99, 102, 106],
          [62, 76, 87, 88, 96, 97, 100],
          [60, 75, 86, 87, 95, 97, 99],
          [59, 72, 82, 85, 87, 95, 97],
          [56, 68, 78, 84, 86, 88, 96],
        ];
      } else {
        throw "Invalid Runway";
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
        (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
      this.setState({
        maxAbortDryKNGP: Math.ceil(maxAbort),
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
        (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
      this.setState({
        maxAbortWetKNGP: Math.ceil(maxAbort),
      });
      this.takeoffDistKNGP(this.state.headwindKNGP, this.temperatureKNGP);
      this.minPower60KNGP(this.temperatureKNGP);
    }
  };

  maxAbortSpeedManual = (headwind, temperature, runwayLength) => {
    // Need to add try {} catch{] to program to account for out of limits entry
    // I tried adding isNaN() for temperature and headwind, but it didn't work
    if (
      temperature > 50 ||
      temperature < 0 ||
      headwind > 40 ||
      headwind < -20
    ) {
      throw "Input is out of limits.";
    }
    let speedCacheDry;
    let speedCacheWet;
    if (runwayLength == 5000) {
      //runwayDistance = 5000
      speedCacheDry = [
        [71, 86, 100, 104, 107, 110, 114],
        [70, 84, 98, 101, 104, 107, 110],
        [68, 80, 94, 97, 100, 104, 108],
        [60, 72, 90, 94, 97, 101, 104],
        [59, 73, 88, 91, 94, 98, 102],
        [58, 71, 86, 89, 92, 96, 100],
      ];
      speedCacheWet = [
        [49, 60, 72, 76, 77, 78, 84],
        [48, 59, 70, 75, 76, 77, 78],
        [46, 56, 68, 70, 72, 76, 77],
        [40, 54, 62, 68, 70, 75, 76],
        [38, 54, 60, 67, 68, 70, 74],
        [36, 52, 60, 62, 67, 68, 72],
      ];
    } else if (runwayLength == 6000) {
      //runway distance = 6000
      speedCacheDry = [
        [84, 100, 108, 110, 112, 116, 120],
        [74, 88, 102, 105, 109, 112, 116],
        [71, 84, 98, 100, 104, 108, 110],
        [69, 80, 96, 99, 102, 106, 109],
        [69, 80, 95, 98, 102, 105, 109],
        [69, 80, 94, 97, 101, 104, 108],
      ];
      speedCacheWet = [
        [60, 72, 77, 78, 82, 86, 88],
        [54, 60, 76, 77, 78, 82, 86],
        [52, 59, 70, 72, 76, 77, 78],
        [47, 56, 68, 72, 76, 77, 78],
        [47, 56, 68, 72, 76, 77, 78],
        [47, 56, 68, 70, 75, 76, 77],
      ];
    } else if (runwayLength == 8000) {
      //runwayDistance = 8000
      speedCacheDry = [
        [101, 115, 130, 133, 136, 139, 142],
        [94, 110, 122, 125, 128, 131, 134],
        [90, 102, 118, 120, 123, 127, 130],
        [88, 101, 116, 119, 122, 125, 128],
        [84, 98, 112, 115, 118, 122, 125],
        [80, 95, 110, 113, 116, 120, 123],
      ];
      speedCacheWet = [
        [75, 85, 100, 105, 106, 108, 110],
        [68, 78, 95, 97, 99, 102, 106],
        [62, 76, 87, 88, 96, 97, 100],
        [60, 75, 86, 87, 95, 97, 99],
        [59, 72, 82, 85, 87, 95, 97],
        [56, 68, 78, 84, 86, 88, 96],
      ];
    } else {
      throw "Invalid Runway Length";
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
      (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
    this.setState({
      maxAbortDryManual: Math.ceil(maxAbort),
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
      (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
    this.setState({
      maxAbortWetManual: Math.ceil(maxAbort),
    });
  };

  takeoffDistKNSE = (headwind, temperature) => {
    if (
      temperature > 50 ||
      temperature < 0 ||
      headwind > 40 ||
      headwind < -20
    ) {
      // throw "Input out of limits.";
      this.setState({
        inputOutOfLimitsMessage: "",
      });
    }

    let distanceCache = [
      [2700, 2200, 1500, 1400, 1300, 1200, 1100],
      [2800, 2300, 1600, 1500, 1400, 1300, 1200],
      [2800, 2300, 1700, 1600, 1500, 1400, 1300],
      [2900, 2400, 1800, 1700, 1600, 1500, 1400],
      [3500, 2800, 2100, 1900, 1800, 1600, 1400],
      [4200, 3500, 2600, 2500, 2300, 2100, 2000],
    ];

    headwind += 20;
    headwind /= 10;
    temperature /= 10;
    let temperatureIdx1 = Math.floor(temperature);
    let temperatureIdx2 = Math.ceil(temperature);
    let headwindIdx1 = Math.floor(headwind);
    let headwindIdx2 = Math.ceil(headwind);
    let minuend =
      (distanceCache[temperatureIdx1][headwindIdx2] -
        distanceCache[temperatureIdx1][headwindIdx1]) *
        (headwind - headwindIdx1) +
      distanceCache[temperatureIdx1][headwindIdx1];
    let subtrahend =
      (distanceCache[temperatureIdx2][headwindIdx2] -
        distanceCache[temperatureIdx2][headwindIdx1]) *
        (headwind - headwindIdx1) +
      distanceCache[temperatureIdx2][headwindIdx1];
    let takeoffDistance =
      (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
    this.setState({
      takeoffDistKNSE: Math.ceil(takeoffDistance),
    });
  };

  takeoffDistKNGP = (headwind, temperature) => {
    if (
      temperature > 50 ||
      temperature < 0 ||
      headwind > 40 ||
      headwind < -20
    ) {
      // throw "Input out of limits.";
      this.setState({
        inputOutOfLimitsMessage2: "",
      });
    }

    let distanceCache = [
      [2700, 2200, 1500, 1400, 1300, 1200, 1100],
      [2800, 2300, 1600, 1500, 1400, 1300, 1200],
      [2800, 2300, 1700, 1600, 1500, 1400, 1300],
      [2900, 2400, 1800, 1700, 1600, 1500, 1400],
      [3500, 2800, 2100, 1900, 1800, 1600, 1400],
      [4200, 3500, 2600, 2500, 2300, 2100, 2000],
    ];

    headwind += 20;
    headwind /= 10;
    temperature /= 10;
    let temperatureIdx1 = Math.floor(temperature);
    let temperatureIdx2 = Math.ceil(temperature);
    let headwindIdx1 = Math.floor(headwind);
    let headwindIdx2 = Math.ceil(headwind);
    let minuend =
      (distanceCache[temperatureIdx1][headwindIdx2] -
        distanceCache[temperatureIdx1][headwindIdx1]) *
        (headwind - headwindIdx1) +
      distanceCache[temperatureIdx1][headwindIdx1];
    let subtrahend =
      (distanceCache[temperatureIdx2][headwindIdx2] -
        distanceCache[temperatureIdx2][headwindIdx1]) *
        (headwind - headwindIdx1) +
      distanceCache[temperatureIdx2][headwindIdx1];
    let takeoffDistance =
      (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
    this.setState({
      takeoffDistKNGP: Math.ceil(takeoffDistance),
    });
  };

  takeoffDistManual = (headwind, temperature) => {
    if (
      temperature > 50 ||
      temperature < 0 ||
      headwind > 40 ||
      headwind < -20
    ) {
      throw "Input out of limits.";
    }

    let distanceCache = [
      [2700, 2200, 1500, 1400, 1300, 1200, 1100],
      [2800, 2300, 1600, 1500, 1400, 1300, 1200],
      [2800, 2300, 1700, 1600, 1500, 1400, 1300],
      [2900, 2400, 1800, 1700, 1600, 1500, 1400],
      [3500, 2800, 2100, 1900, 1800, 1600, 1400],
      [4200, 3500, 2600, 2500, 2300, 2100, 2000],
    ];

    headwind += 20;
    headwind /= 10;
    temperature /= 10;
    let temperatureIdx1 = Math.floor(temperature);
    let temperatureIdx2 = Math.ceil(temperature);
    let headwindIdx1 = Math.floor(headwind);
    let headwindIdx2 = Math.ceil(headwind);
    let minuend =
      (distanceCache[temperatureIdx1][headwindIdx2] -
        distanceCache[temperatureIdx1][headwindIdx1]) *
        (headwind - headwindIdx1) +
      distanceCache[temperatureIdx1][headwindIdx1];
    let subtrahend =
      (distanceCache[temperatureIdx2][headwindIdx2] -
        distanceCache[temperatureIdx2][headwindIdx1]) *
        (headwind - headwindIdx1) +
      distanceCache[temperatureIdx2][headwindIdx1];
    let takeoffDistance =
      (minuend - subtrahend) * (temperatureIdx2 - temperature) + subtrahend;
    this.setState({
      takeoffDistManual: Math.ceil(takeoffDistance),
    });
  };

  activateToldModal() {
    if (
      this.state.temperatureManual &&
      this.state.windDirectionManual &&
      this.state.windSpeedManual &&
      this.state.runwayHeadingManual &&
      this.state.runwayLengthManual
    ) {
      this.setHeadwindManual(
        this.state.windDirectionManual,
        this.state.windSpeedManual,
        this.state.runwayHeadingManual
      );
      this.minPower60Manual(this.state.temperatureManual);

      this.setState({
        toldModalActive: "is-active",
        missingInputText: "hide",
      });
    } else {
      this.setState({
        missingInputText: "missingInputText",
      });
    }
  }

  exitToldModal() {
    this.setState({
      toldModalActive: "",
      headwindManual: null,
      maxAbortDryManual: null,
      maxAbortWetManual: null,
      minPower60Manual: null,
      takeoffDistManual: null,
    });
  }

  handleClickKNSE = (event) => {
    let heading = event.value * 10;
    this.setState(
      {
        // toldData1: "fa fa-spinner fa-spin",
        maxAbortDryKNSE: null,
        maxAbortWetKNSE: null,
        takeoffDistKNSE: null,
        selectedKNSE: true,
        minPower60KNSE: "",
        runwayHeadingKNSE: heading,
      },
      () => {
        this.updateDataKNSE();

        var loading =
          this.state.selectedKNSE &&
          !this.state.takeoffDistKNSE &&
          !this.state.maxAbortDryKNSE &&
          !this.state.maxAbortWetKNSE
            ? "fa fa-spinner fa-spin"
            : "toldData";

        this.setState({
          toldData1: loading,
        });
      }
    );
  };

  handleClickKNGP = (event) => {
    if (event.value == "31L") {
      event.value = "31.1";
    }
    if (event.value == "13R") {
      event.value = "13.1";
    }
    if (event.value == "13L") {
      event.value = "13";
    }
    if (event.value == "31R") {
      event.value = "31";
    }
    let heading = event.value * 10;
    this.setState(
      {
        maxAbortDryKNGP: null,
        maxAbortWetKNGP: null,
        takeoffDistKNGP: null,
        selectedKNGP: true,
        minPower60KNGP: "",
        runwayHeadingKNGP: heading,
      },
      () => {
        this.updateDataKNGP();

        var loading =
          this.state.selectedKNGP &&
          !this.state.takeoffDistKNGP &&
          !this.state.maxAbortDryKNGP &&
          !this.state.maxAbortWetKNGP
            ? "fa fa-spinner fa-spin"
            : "toldData";

        this.setState({
          toldData2: loading,
        });
      }
    );
  };

  updateDataKNSE = () => {
    axios
      .get("getWeatherDataKNSE", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("KNSE Data: ", res);
        this.temperatureKNSE = res.data.temperature.value;
        this.windSpeedKNSE = res.data.wind_speed.value;
        this.windDirectionKNSE = res.data.wind_direction.value;
        this.setHeadwindKNSE(
          this.windDirectionKNSE,
          this.windSpeedKNSE,
          this.state.runwayHeadingKNSE
        );
        this.setState({
          KNSEMetar: res.data.sanitized,
          metarLoadingKNSE: false,
        });
        console.log(
          "KNSE",
          this.windDirectionKNSE,
          this.windSpeedKNSE,
          this.state.headwindKNSE,
          this.temperatureKNSE
        );
        // this.maxAbortSpeedKNSE(
        //   this.state.headwindKNSE,
        //   this.temperatureKNSE,
        //   this.state.runwayHeadingKNSE
        // );
        // this.takeoffDistKNSE(this.state.headwindKNSE, this.temperatureKNSE);
        // this.minPower60KNSE(this.temperatureKNSE);
      });
  };

  updateDataKNGP = () => {
    axios
      .get("getWeatherDataKNGP", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        console.log("KNGP Data: ", res);
        this.temperatureKNGP = res.data.temperature.value;
        this.windSpeedKNGP = res.data.wind_speed.value;
        this.windDirectionKNGP = res.data.wind_direction.value;
        this.setHeadwindKNGP(
          this.windDirectionKNGP,
          this.windSpeedKNGP,
          this.state.runwayHeadingKNGP
        );
        this.setState({
          KNGPMetar: res.data.sanitized,
          metarLoadingKNGP: false,
        });
        console.log(
          "KNGP",
          this.windDirectionKNGP,
          this.windSpeedKNGP,
          this.state.headwindKNGP,
          this.temperatureKNGP
        );
        // this.maxAbortSpeedKNGP(
        //   this.state.headwindKNGP,
        //   this.temperatureKNGP,
        //   this.state.runwayHeadingKNGP
        // );
        // this.takeoffDistKNGP(this.state.headwindKNGP, this.temperatureKNGP);
        // this.minPower60KNGP(this.temperatureKNGP);

        var doneLoading =
          this.state.selectedKNGP &&
          !this.state.takeoffDistKNGP &&
          !this.state.maxAbortDryKNGP &&
          !this.state.maxAbortWetKNGP
            ? "fa fa-spinner fa-spin"
            : "toldData";

        this.setState({
          toldData2: doneLoading,
        });
      });
  };

  handleClickManual = (event) => {
    this.setState({
      runwayLengthManual: null,
    });
    this.setState({
      runwayLengthManual: event.value,
    });
    console.log(
      "Modal values: ",
      this.state.windDirectionManual,
      this.state.windSpeedManual,
      this.state.runwayHeadingManual,
      this.state.headwindManual
    );
  };

  componentDidMount() {
    this.exitToldModal = this.exitToldModal.bind(this);
    this.updateDataKNSE();
    this.updateDataKNGP();
  }

  render() {
    return (
      <React.Fragment>
        <section className={`section container5`}>
          <div className="container3">
            <h1 className="title">TOLD</h1>
            {/* <h3 className="buildInProgress earlyAccess">*BUILD IN PROGRESS*</h3> */}
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
                  value={defaultOption}
                  onChange={this.handleClickKNSE}
                  placeholder="Select an option"
                />
              </span>
            </div>

            <div
              id={this.state.inputOutOfLimitsMessage}
              className="inputOutOfLimitsText"
            >
              input out of limits
            </div>

            <div className="smallerText">
              MIN TORQUE AT 60 KIAS:
              <span className={`${this.state.toldData1}`}>{`${
                this.state.inputOutOfLimitsMessage === "hide"
                  ? this.state.minPower60KNSE
                  : ""
              }`}</span>
            </div>
            <div className="smallerText">
              TAKEOFF DISTANCE (FLAPS T/O):
              <span className={`${this.state.toldData1}`}>
                {" "}
                {this.state.takeoffDistKNSE
                  ? `${this.state.takeoffDistKNSE} FT`
                  : ""}
              </span>
            </div>
            <div className="smallerText">
              MAX DRY ABORT SPEED:
              <span className={`${this.state.toldData1}`}>
                {this.state.maxAbortDryKNSE
                  ? `${this.state.maxAbortDryKNSE} KIAS`
                  : ""}
              </span>
            </div>
            <div className="smallerText marginBottomTold">
              MAX WET ABORT SPEED:
              <span className={`${this.state.toldData1}`}>
                {" "}
                {this.state.maxAbortWetKNSE
                  ? `${this.state.maxAbortWetKNSE} KIAS`
                  : ""}
              </span>
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
                  onChange={this.handleClickKNGP}
                  value={defaultOption2}
                  placeholder="Select an option"
                />
              </span>
            </div>

            <div
              id={this.state.inputOutOfLimitsMessage2}
              className="inputOutOfLimitsText"
            >
              input out of limits
            </div>

            <div className="smallerText">
              MIN TORQUE AT 60 KIAS:
              <span className={`${this.state.toldData2}`}>{`${
                this.state.inputOutOfLimitsMessage2 === "hide"
                  ? this.state.minPower60KNGP
                  : ""
              }`}</span>
            </div>
            <div className="smallerText">
              TAKEOFF DISTANCE (FLAPS T/O):
              <span className={`${this.state.toldData2}`}>
                {" "}
                {this.state.takeoffDistKNGP
                  ? `${this.state.takeoffDistKNGP} FT`
                  : ""}
              </span>
            </div>
            <div className="smallerText">
              MAX DRY ABORT SPEED:
              <span className={`${this.state.toldData2}`}>
                {" "}
                {this.state.maxAbortDryKNGP
                  ? `${this.state.maxAbortDryKNGP} KIAS`
                  : ""}
              </span>
            </div>
            <div className="smallerText marginBottomTold">
              MAX WET ABORT SPEED:
              <span className={`${this.state.toldData2}`}>
                {" "}
                {this.state.maxAbortWetKNGP
                  ? `${this.state.maxAbortWetKNGP} KIAS`
                  : ""}
              </span>
            </div>

            <h2 className="metarTitle">MANUAL ENTRY</h2>

            <div className="smallerText">
              TEMPERATURE(°C):
              <input
                className="input toldDataInputFields is-small"
                value={this.state.temperatureManual}
                onChange={(event) => {
                  this.setState({
                    temperatureManual: event.target.value,
                  });
                }}
                type="text"
                placeholder="Ex: 15"
              ></input>
            </div>
            <div className="smallerText">
              WIND DIRECTION:{" "}
              <input
                className="input toldDataInputFields is-small"
                value={this.state.windDirectionManual}
                onChange={(event) => {
                  this.setState({
                    windDirectionManual: event.target.value,
                  });
                }}
                type="text"
                placeholder="Ex: 120"
              ></input>
            </div>
            <div className="smallerText">
              WIND SPEED:{" "}
              <input
                className="input toldDataInputFields is-small"
                value={this.state.windSpeedManual}
                onChange={(event) => {
                  this.setState({
                    windSpeedManual: event.target.value,
                  });
                }}
                type="text"
                placeholder="Ex: 10"
              ></input>
            </div>
            <div className="smallerText marginBottomTold">
              RUNWAY HEADING:{" "}
              <input
                className="input toldDataInputFields is-small"
                value={this.state.manualRunwayHeading}
                onChange={(event) => {
                  this.setState({
                    runwayHeadingManual: event.target.value,
                  });
                }}
                type="text"
                placeholder="Ex: 230"
              ></input>
            </div>
            <div className="toldForRunway">
              <span>RUNWAY LENGTH: </span>
              <span>
                <Dropdown
                  options={["5000", "6000", "8000"]}
                  onChange={this.handleClickManual}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </span>
            </div>

            <div className={this.state.missingInputText}>
              please enter a value for every input
            </div>

            <div className="calculateContainer">
              <button
                onClick={this.activateToldModal}
                className="calculateToldButton button is-link"
                id="calculateButton"
              >
                calculate
              </button>
            </div>

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
                    <span className="toldData">{`${this.state.minPower60Manual}`}</span>
                  </div>
                  <div className="smallerText">
                    TAKEOFF DISTANCE (FLAPS T/O):
                    <span className="toldData">{`${this.state.takeoffDistManual}`}</span>
                  </div>
                  <div className="smallerText">
                    MAX DRY ABORT SPEED:
                    <span className="toldData">{`${this.state.maxAbortDryManual}`}</span>
                  </div>
                  <div className="smallerText marginBottomTold">
                    MAX WET ABORT SPEED:
                    <span className="toldData">{`${this.state.maxAbortWetManual}`}</span>
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
