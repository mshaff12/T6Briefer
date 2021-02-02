import React, { Component } from "react";

class EPPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: {
        ep1: "",
        ep2: "",
        ep3: "",
        ep4: "",
        ep5: "",
        ep6: "",
        ep7: "",
        ep8: "",
        ep9: "",
        ep10: "",
        ep11: "",
        ep12: "",
        ep13: "",
        ep14: "",
        ep15: "",
        ep16: "",
        ep17: "",
        ep18: "",
        ep19: "",
        ep20: "",
      },
      limitsModal: "",
      limitsPageBackground: "limitsPageBackground",
      limitsPageButtonName: "Toggle Blank",
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleClickEP = this.handleClickEP.bind(this);

    this.handleClickLimits = this.handleClickLimits.bind(this);
    this.handleCloseLimitsModal = this.handleCloseLimitsModal.bind(this);
    this.toggleLimitsPage = this.toggleLimitsPage.bind(this);
  }

  toggleLimitsPage() {
    if (this.state.limitsPageBackground === "limitsPageBackground") {
      this.setState({
        limitsPageBackground: "limitsPageBackgroundEmpty",
        limitsPageButtonName: "Toggle Filled",
      });
    } else {
      this.setState({
        limitsPageBackground: "limitsPageBackground",
        limitsPageButtonName: "Toggle Blank",
      });
    }
  }

  handleCloseLimitsModal() {
    this.setState({
      limitsModal: "",
    });
  }

  handleClickLimits() {
    this.setState({
      limitsModal: "is-active",
    });
  }

  handleClickEP(e) {
    e.preventDefault();

    var epNumber = e.target.getAttribute("data-id");
    var oldModalActive = this.state.modalActive;
    (oldModalActive[epNumber] = "is-active"),
      this.setState({
        modalActive: oldModalActive,
      });
  }

  handleCloseModal(e) {
    e.preventDefault();

    var epNumber = e.target.getAttribute("data-id");
    var oldModalActive = this.state.modalActive;
    (oldModalActive[epNumber] = ""),
      this.setState({
        modalActive: oldModalActive,
      });
  }

  render() {
    return (
      <React.Fragment>
        <section className={`section container1`}>
          <div className="container">
            <h1 className="title">{`EP'S & LIMITS`}</h1>

            <div className={`modal ${this.state.modalActive.ep1}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">ABORT START PROCEDURE</p>
                  <button
                    data-id="ep1"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  *1. PCL – OFF or STARTER switch – AUTO/RESET
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep1"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep2}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    EMERGENCY ENGINE SHUTDOWN ON THE GROUND
                  </p>
                  <button
                    data-id="ep2"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <div className="modal-body-line">*1. PCL – OFF</div>
                  <div className="modal-body-line">
                    *2. FIREWALL SHUTTOFF HANDLE – PULL
                  </div>
                  <div className="modal-body-line">
                    *3. EMERGENCY GROUND EGRESS – AS REQUIRED
                  </div>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep2"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep3}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">EMERGENCY GROUND EGRESS</p>
                  <button
                    data-id="ep3"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <div className="modal-body-line">
                    *1. ISS MODE SELECTOR – SOLO
                  </div>
                  <div className="modal-body-line">
                    *2. SEAT SAFETY PIN – INSTALL (BOTH)
                  </div>
                  <div className="modal-body-line">
                    *3. PARKING BRAKE – AS REQUIRED
                  </div>
                  <div className="modal-body-line">*4. CANOPY – OPEN</div>
                  <div className="modal-body-line">
                    <span className="smallerTextEp">
                      IF CANOPY CANNOT BE OPENED OR SITUATION REQUIRES RIGHT
                      SIDE EGRESS:{" "}
                    </span>
                  </div>
                  <div className="modal-body-line">
                    *5. CFS HANDLE SAFETY PIN – REMOVE (BOTH)
                  </div>
                  <div className="modal-body-line">
                    *6. CFS HANDLE – ROTATE 90 DEGREES COUNTER CLOCKWISE AND
                    PULL (BOTH)
                  </div>
                  <div className="modal-body-line">
                    *7. UPPER FITTINGS, LOWER FITTINGS, AND LEG RESTRAINT
                    GARTERS – RELEASE (BOTH)
                  </div>
                  <div className="modal-body-line">
                    *8. BAT, GEN, AND AUX BAT SWITCHES – OFF
                  </div>
                  <div className="modal-body-line">*9. EVACUATE AIRCRAFT</div>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep3"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep4}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">ABORT</p>
                  <button
                    data-id="ep4"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">*1. PCL – IDLE</section>
                  <section className="modal-body-line">
                    *2. BRAKES – AS REQUIRED
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep4"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep5}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    ENGINE FAILURE IMMEDIATELY AFTER TAKEOFF (SUFFICIENT RUNWAY
                    REMAINING STRAIGHT AHEAD)
                  </p>
                  <button
                    data-id="ep5"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. AIRSPEED – 110 KNOTS (MINIMUM)
                  </section>
                  <section className="modal-body-line">
                    *2. PCL – AS REQUIRED
                  </section>
                  <section className="modal-body-line">
                    *3. EMER LDG GR HANDLE – PULL (AS REQUIRED)
                  </section>
                  <section className="modal-body-line">
                    *4. FLAPS – AS REQUIRED
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep5"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep6}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    ENGINE FAILURE DURING FLIGHT
                  </p>
                  <button
                    data-id="ep6"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. ZOOM/GLIDE – 125 KNOTS (MINIMUM)
                  </section>
                  <section className="modal-body-line">*2. PCL – OFF</section>
                  <section className="modal-body-line">
                    *3. INTERCEPT ELP
                  </section>
                  <section className="modal-body-line">
                    *4. AIRSTART – ATTEMPT IF WARRANTED
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF CONDITIONS DO NOT WARRANT AN AIRSTART:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *5. FIREWALL SHUTOFF HANDLE – PULL
                  </section>
                  <section className="modal-body-line">
                    *6. EXECUTE FORCED LANDING OR EJECT
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep6"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep7}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    IMMEDIATE AIRSTART (PMU NORM)
                  </p>
                  <button
                    data-id="ep7"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">*1. PCL – OFF</section>
                  <section className="modal-body-line">
                    *2. STARTER SWITCH – AUTO/RESET
                  </section>
                  <section className="modal-body-line">
                    *3. PCL – IDLE, ABOVE 13% N1
                  </section>
                  <section className="modal-body-line">
                    *4. ENGINE INSTRUMENTS – MONITOR ITT, N1, AND OIL PRESSURE
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF AIRSTART IS UNSUCCESSFUL:
                    </span>
                  </section>
                  <section className="modal-body-line">*5. PCL – OFF</section>
                  <section className="modal-body-line">
                    *6. FIREWALL SHUTOFF HANDLE – PULL
                  </section>
                  <section className="modal-body-line">
                    *7. EXECUTE FORCED LANDING OR EJECT
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF AIRSTART IS SUCCESSFUL:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *8. PCL – AS REQUIRED AFTER N1 REACHES IDLE RPM
                    (APPROXIMATELY 67% N1)
                  </section>
                  <section className="modal-body-line">
                    *9. PEL – EXECUTE
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep7"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep8}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    UNCOMMANDED POWER CHANGES / LOSS OF POWER/ UNCOMMANDED
                    PROPELLER FEATHER
                  </p>
                  <button
                    data-id="ep8"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. PCL – MID RANGE
                  </section>
                  <section className="modal-body-line">
                    *2. PMU SWITCH – OFF
                  </section>
                  <section className="modal-body-line">
                    *3. PROP SYS CIRCUIT BREAKER (Left Front Console) – PULL, IF
                    Np STABLE BELOW 40%
                  </section>
                  <section className="modal-body-line">
                    *4. PCL – AS REQUIRED
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF POWER IS SUFFICIENT FOR CONTINUED FLIGHT:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *5. PEL – EXECUTE
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF POWER IS INSUFFICIENT TO COMPLETE PEL:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *6. PROP SYS CIRCUIT BREAKER – RESET, AS REQUIRED
                  </section>
                  <section className="modal-body-line">*7. PCL – OFF</section>
                  <section className="modal-body-line">
                    *8. FIREWALL SHUTOFF HANDLE – PULL
                  </section>
                  <section className="modal-body-line">
                    *9. EXECUTE FORCED LANDING OR EJECT
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep8"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep9}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">COMPRESSOR STALLS</p>
                  <button
                    data-id="ep9"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. PCL – SLOWLY RETARD BELOW STALL THRESHOLD
                  </section>
                  <section className="modal-body-line">
                    *2. DEFOG SWITCH – ON
                  </section>
                  <section className="modal-body-line">
                    *3. PCL – SLOWLY ADVANCE (AS REQUIRED)
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF POWER IS SUFFICIENT FOR CONTINUED FLIGHT:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *4. PEL – EXECUTE
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF POWER IS INSUFFICIENT TO COMPLETE PEL:
                    </span>
                  </section>
                  <section className="modal-body-line">*5. PCL – OFF</section>
                  <section className="modal-body-line">
                    *6. FIREWALL SHUTOFF HANDLE – PULL
                  </section>
                  <section className="modal-body-line">
                    *7. EXECUTE FORCED LANDING OR EJECT
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep9"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep10}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    INADVERTENT DEPARTURE FROM CONTROLLED FLIGHT
                  </p>
                  <button
                    data-id="ep10"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">*1. PCL – IDLE</section>
                  <section className="modal-body-line">
                    *2. CONTROLS - NEUTRAL
                  </section>
                  <section className="modal-body-line">
                    *3. ALTITUDE - CHECK
                  </section>
                  <section className="modal-body-line">
                    *4. RECOVER FROM UNUSUAL ATTITUDE
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep10"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep11}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">FIRE IN FLIGHT</p>
                  <button
                    data-id="ep11"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    <span className="smallerTextEp">IF FIRE IS CONFIRMED:</span>
                  </section>
                  <section className="modal-body-line">*1. PCL – OFF</section>
                  <section className="modal-body-line">
                    *2. FIREWALL SHUTOFF HANDLE – PULL
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF FIRE IS EXTINGUISHED:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *3. FORCED LANDING – EXECUTE
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF FIRE DOES NOT EXTINGUISH OR FORCED LANDING IS
                      IMPRACTICAL:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *4. EJECT (BOTH)
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF FIRE IS NOT CONFIRMED:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *5. PEL – EXECUTE
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep11"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep12}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    SMOKE AND FUME ELIMINATION/ELECTRICAL FIRE
                  </p>
                  <button
                    data-id="ep12"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. OBOGS – CHECK
                  </section>
                  <section className="modal-body-line">
                    a. OBOGS supply lever – ON
                  </section>
                  <section className="modal-body-line">
                    b. OBOGS concentration lever – MAX
                  </section>
                  <section className="modal-body-line">
                    c. OBOGS pressure lever - EMERGENCY
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep12"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep13}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">CHIP DETECTOR WARNING</p>
                  <button
                    data-id="ep13"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. PCL – MINIMUM NECESSARY TO INTERCEPT ELP; AVOID
                    UNNECESSARY PCL MOVEMENTS
                  </section>
                  <section className="modal-body-line">
                    *2. PEL – EXECUTE
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep13"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep14}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    OIL SYSTEM MALFUNCTION OR LOW OIL PRESSURE
                  </p>
                  <button
                    data-id="ep14"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF ONLY AMBER OIL PX caution ILLUMINATES:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *1. TERMINATE MANEUVER
                  </section>
                  <section className="modal-body-line">
                    *2. CHECK OIL PRESSURE; IF OIL PRESSURE IS NORMAL, CONTINUE
                    OPERATIONS
                  </section>
                  <section className="modal-body-line">
                    <span className="smallerTextEp">
                      IF RED OIL PX WARNING ILLUMINATES AND/OR AMBER OIL PX
                      CAUTION REMAINS ILLUMINATED FOR 5 SECONDS:
                    </span>
                  </section>
                  <section className="modal-body-line">
                    *3. PCL – MINIMUM NECESSARY TO INTERCEPT ELP; AVOID
                    UNNECESSARY PCL MOVEMENTS
                  </section>
                  <section className="modal-body-line">
                    *4. PEL – EXECUTE
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep14"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep15}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">LOW FUEL PRESSURE</p>
                  <button
                    data-id="ep15"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. PEL – EXECUTE
                  </section>
                  <section className="modal-body-line">
                    *2. BOOST PUMP SWITCH – ON
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep15"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep16}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">HIGH FUEL FLOW</p>
                  <button
                    data-id="ep16"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section className="modal-card-body">*1. PEL – EXECUTE</section>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep16"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep17}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    OBOGS FAILURE/OVERTEMP/PHYSIOLOGICAL SYMPTOMS
                  </p>
                  <button
                    data-id="ep17"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. GREEN RING – PULL (AS REQUIRED)
                  </section>
                  <section className="modal-body-line">
                    *2. DESCENT BELOW 10,000 FEET MSL – INITIATE
                  </section>
                  <section className="modal-body-line">
                    *3. OBOGS SUPPLY LEVER – OFF (BOTH)
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep17"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep18}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">EJECT</p>
                  <button
                    data-id="ep18"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section className="modal-card-body">
                  *1. EJECTION HANDLE – PULL (BOTH)
                </section>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep18"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep19}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">FORCED LANDING</p>
                  <button
                    data-id="ep19"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. AIRSPEED – 125 KIAS PRIOR TO EXTENDING LANDING GEAR
                  </section>
                  <section className="modal-body-line">
                    *2. EMER LDG GR HANDLE – PULL (AS REQUIRED)
                  </section>
                  <section className="modal-body-line">
                    *3. AIRSPEED – 120 KIAS MINIMUM UNTIL INTERCEPTING FINAL;
                    110 KIAS MINIMUM ON FINAL
                  </section>
                  <section className="modal-body-line">
                    *4. FLAPS – AS REQUIRED
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep19"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <div className={`modal ${this.state.modalActive.ep20}`}>
              <div className="modal-background"></div>
              <div className="modal-card epModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">
                    PRECAUTIONARY EMERGENCY LANDING (PEL)
                  </p>
                  <button
                    data-id="ep20"
                    onClick={this.handleCloseModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body">
                  <section className="modal-body-line">
                    *1. TURN TO NEAREST SUITABLE FIELD
                  </section>
                  <section className="modal-body-line">
                    *2. CLIMB OR ACCELERATE TO INTERCEPT ELP
                  </section>
                  <section className="modal-body-line">
                    *3. GEAR, FLAPS, SPEED BRAKE – UP
                  </section>
                </div>
                <footer className="modal-card-foot">
                  <button
                    data-id="ep20"
                    onClick={this.handleCloseModal}
                    className="button is-dark"
                  >
                    Close
                  </button>
                </footer>
              </div>
            </div>

            <button
              onClick={this.handleClickLimits}
              id="limits"
              className="button2 button is-dark"
            >
              <span className="spanLimits">Limits</span>
            </button>

            {/* ============================== Limits modal ========================================================= */}
            <div className={`modal ${this.state.limitsModal}`}>
              <div className="modal-background">
                <div className="pagesContainer">
                  <button
                    onClick={this.handleCloseLimitsModal}
                    className="button is-danger syllabusPagesCloseButton"
                  >
                    {" "}
                    <i
                      onClick={this.handleCloseLimitsModal}
                      className="fa fa-undo fa-2x"
                    ></i>
                  </button>
                  <button
                    onClick={this.handleCloseLimitsModal}
                    className="delete is-large"
                    aria-label="close"
                  ></button>
                  <button
                    onClick={this.toggleLimitsPage}
                    className="button is-info toggleLimitsPageButton"
                  >
                    {this.state.limitsPageButtonName}
                  </button>
                  <div
                    className={`modal-background-syllabus-pages ${this.state.limitsPageBackground}`}
                  ></div>
                </div>
              </div>
            </div>
            {/* ===================================================================================================== */}

            <button
              data-id="ep1"
              onClick={this.handleClickEP}
              className="epButton button2 button is-dark"
            >
              ABORT START PROCEDURE
            </button>
            <button
              data-id="ep2"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton epSmallFont button3 button is-dark"
            >
              EMERGENCY ENGINE SHUTDOWN ON THE GROUND
            </button>
            <button
              data-id="ep3"
              onClick={this.handleClickEP}
              className="epButton button2 button is-dark"
            >
              EMERGENCY GROUND EGRESS
            </button>
            <button
              data-id="ep4"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton button3 button is-dark"
            >
              ABORT
            </button>
            <button
              data-id="ep5"
              onClick={this.handleClickEP}
              className="epButton epSmallFont button2 button is-dark"
            >
              ENGINE FAILURE IMMEDIATELY AFTER TAKEOFF (SUFFICIENT RUNWAY
              REMAINING STRAIGHT AHEAD)
            </button>
            <button
              data-id="ep6"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton button3 button is-dark"
            >
              ENGINE FAILURE DURING FLIGHT
            </button>
            <button
              data-id="ep7"
              onClick={this.handleClickEP}
              className="epButton button2 button is-dark"
            >
              IMMEDIATE AIRSTART (PMU NORM)
            </button>
            <button
              data-id="ep8"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton epSmallFont button3 button is-dark"
            >
              UNCOMMANDED POWER CHANGES / LOSS OF POWER/ UNCOMMANDED PROPELLER
              FEATHER
            </button>
            <button
              data-id="ep9"
              onClick={this.handleClickEP}
              className="epButton button2 button is-dark"
            >
              COMPRESSOR STALLS
            </button>
            <button
              data-id="ep10"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton epSmallFont button3 button is-dark"
            >
              INADVERTENT DEPARTURE FROM CONTROLLED FLIGHT
            </button>
            <button
              data-id="ep11"
              onClick={this.handleClickEP}
              className="button2 epButton button is-dark"
            >
              FIRE IN FLIGHT
            </button>
            <button
              data-id="ep12"
              onClick={this.handleClickEP}
              id="gray"
              className="epSmallFont epButton button3 button is-dark"
            >
              SMOKE AND FUME ELIMINATION/ELECTRICAL FIRE
            </button>
            <button
              data-id="ep13"
              onClick={this.handleClickEP}
              className="button2 epButton button is-dark"
            >
              CHIP DETECTOR WARNING
            </button>
            <button
              data-id="ep14"
              onClick={this.handleClickEP}
              id="gray"
              className="epSmallFont epButton button3 button is-dark"
            >
              OIL SYSTEM MALFUNCTION OR LOW OIL PRESSURE
            </button>
            <button
              data-id="ep15"
              onClick={this.handleClickEP}
              className="button2 epButton button is-dark"
            >
              LOW FUEL PRESSURE
            </button>
            <button
              data-id="ep16"
              onClick={this.handleClickEP}
              id="gray"
              className="button3 epButton button is-dark"
            >
              HIGH FUEL FLOW
            </button>
            <button
              data-id="ep17"
              onClick={this.handleClickEP}
              className="epSmallFont epButton button2 button is-dark"
            >
              OBOGS FAILURE/OVERTEMP/PHYSIOLOGICAL SYMPTOMS
            </button>
            <button
              data-id="ep18"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton button2 button is-dark"
            >
              EJECT
            </button>
            <button
              data-id="ep19"
              onClick={this.handleClickEP}
              className="epButton button2 button is-dark"
            >
              FORCED LANDING
            </button>
            <button
              data-id="ep20"
              onClick={this.handleClickEP}
              id="gray"
              className="epButton epSmallFont button2 button is-dark"
            >
              PRECAUTIONARY EMERGENCY LANDING (PEL)
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default EPPage;
