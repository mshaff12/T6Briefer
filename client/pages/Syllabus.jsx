import React, { Component, Suspense, lazy } from "react";
import Dropdown from "../components/Dropdowns/Dropdown.jsx";
import Dropdown2 from "../components/Dropdowns/Dropdown2.jsx";
import Dropdown3 from "../components/Dropdowns/Dropdown3.jsx";
import Dropdown4 from "../components/Dropdowns/Dropdown4.jsx";

const LazyCss = lazy(() => import("./LazyCss.jsx"));

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notHomePage: true,
      dropdown: "",
      arrow: "fa-angle-down",
      dropdown2: "",
      arrow2: "fa-angle-down",
      dropdown3: "",
      arrow3: "fa-angle-down",
      dropdown4: "",
      arrow4: "fa-angle-down",
      contactSelected: "C4100",
      instrumentSelected: "I4100",
      formationSelected: "F4100",
      navigationSelected: "N4100",
      syllabusModals: {
        C4100: {
          "is-active": "",
          pages: [
            "syllabus-C41_1 firstPage",
            "syllabus-C41_2",
            "syllabus-C41_3 lastPage",
          ],
        },
        C4200: {
          "is-active": "",
          pages: [
            "syllabus-C42_1 firstPage",
            "syllabus-C42_2",
            "syllabus-C42_3 lastPage",
          ],
        },
        C4300: {
          "is-active": "",
          pages: [
            "syllabus-C43_1 firstPage",
            "syllabus-C43_2",
            "syllabus-C43_3 lastPage",
          ],
        },
        C4490: {
          "is-active": "",
          pages: ["syllabus-C44_1 firstPage", "syllabus-C44_2 lastPage"],
        },
        C4501: {
          "is-active": "",
          pages: ["syllabus-C45_1 firstPage", "syllabus-C45_2 lastPage"],
        },
        C4600: {
          "is-active": "",
          pages: [
            "syllabus-C46_1 firstPage",
            "syllabus-C46_2",
            "syllabus-C46_3 lastPage",
          ],
        },
        C4790: {
          "is-active": "",
          pages: ["syllabus-C47_1 firstPage", "syllabus-C47_2 lastPage"],
        },
        C4801: {
          "is-active": "",
          pages: ["syllabus-C48_1 firstPage", "syllabus-C48_2 lastPage"],
        },
        C4901: {
          "is-active": "",
          pages: ["syllabus-C49_1 firstPage", "syllabus-C49_2 lastPage"],
        },
        I4100: {
          "is-active": "",
          pages: [
            "syllabus-I41_1 firstPage",
            "syllabus-I41_2",
            "syllabus-I41_3 lastPage",
          ],
        },
        I4200: {
          "is-active": "",
          pages: [
            "syllabus-I42_1 firstPage",
            "syllabus-I42_2",
            "syllabus-I42_3 lastPage",
          ],
        },
        I4300: {
          "is-active": "",
          pages: [
            "syllabus-I43_1 firstPage",
            "syllabus-I43_2",
            "syllabus-I43_3 lastPage",
          ],
        },
        I4490: {
          "is-active": "",
          pages: [
            "syllabus-I44_1 firstPage",
            "syllabus-I44_2",
            "syllabus-I44_3 lastPage",
          ],
        },
        N4100: {
          "is-active": "",
          pages: ["syllabus-N41_1 firstPage", "syllabus-N41_2 lastPage"],
        },
        N4200: {
          "is-active": "",
          pages: ["syllabus-N42_1 firstPage", "syllabus-N42_2 lastPage"],
        },
        F4100: {
          "is-active": "",
          pages: [
            "syllabus-F41_1 firstPage",
            "syllabus-F41_2",
            "syllabus-F41_3 lastPage",
          ],
        },
        F4201: {
          "is-active": "",
          pages: ["syllabus-F42_1 firstPage", "syllabus-F42_2 lastPage"],
        },
        F4300: {
          "is-active": "",
          pages: [
            "syllabus-F43_1 firstPage",
            "syllabus-F43_2",
            "syllabus-F43_3 lastPage",
          ],
        },
      },
      currentSyllabus: "SYLLABUS",
      modalActive: "",
    };
    this.handleClickOpenSyllabus = this.handleClickOpenSyllabus.bind(this);
    this.handleUpdateContactSelected = this.handleUpdateContactSelected.bind(
      this
    );
    this.handleUpdateInstrumentSelected = this.handleUpdateInstrumentSelected.bind(
      this
    );
    this.handleUpdateFormationSelected = this.handleUpdateFormationSelected.bind(
      this
    );
    this.handleUpdateNavigationSelected = this.handleUpdateNavigationSelected.bind(
      this
    );

    this.handleCloseSyllabusModal = this.handleCloseSyllabusModal.bind(this);
  }

  handleCloseSyllabusModal(e) {
    this.setState({
      currentSyllabus: "Syllabus",
      modalActive: "",
    });

    var modalToClose = e.target.getAttribute("data-id");

    var oldModalState = this.state.syllabusModals;

    oldModalState[modalToClose]["is-active"] = "";

    this.setState({
      syllabusModals: oldModalState,
    });
  }

  handleUpdateContactSelected(e) {
    var contact = e.target.getAttribute("data-id");

    this.setState({
      contactSelected: contact,
    });
  }
  handleUpdateInstrumentSelected(e) {
    var instrument = e.target.getAttribute("data-id");

    this.setState({
      instrumentSelected: instrument,
    });
  }

  handleUpdateFormationSelected(e) {
    var formation = e.target.getAttribute("data-id");

    this.setState({
      formationSelected: formation,
    });
  }

  handleUpdateNavigationSelected(e) {
    var navigation = e.target.getAttribute("data-id");

    this.setState({
      navigationSelected: navigation,
    });
  }

  handleClickOpenSyllabus(e) {
    console.log(this.props);
    if (this.props.location.state !== undefined) {
      this.props.location.state.hideNav();
    }

    var subject = e.target.getAttribute("data-id");

    this.setState({
      currentSyllabus: this.state.contactSelected,
      modalActive: "hide",
    });

    if (subject === "contact") {
      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.contactSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      });
    } else if (subject === "instrument") {
      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.instrumentSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      });
    } else if (subject === "navigation") {
      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.navigationSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      });
    } else if (subject === "formation") {
      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.formationSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      });
    }
  }

  handleClick = () => {
    if (this.state.dropdown === "") {
      this.setState({
        dropdown: "is-active",
        dropdown2: "",
        dropdown3: "",
        dropdown4: "",
        arrow: "fa-angle-up",
        arrow2: "fa-angle-down",
        arrow3: "fa-angle-down",
        arrow4: "fa-angle-down",
      });
    } else {
      this.setState({
        dropdown: "",
        arrow: "fa-angle-down",
      });
    }
  };

  handleClick2 = () => {
    if (this.state.dropdown2 === "") {
      this.setState({
        dropdown2: "is-active",
        dropdown: "",
        dropdown3: "",
        dropdown4: "",
        arrow2: "fa-angle-up",
        arrow: "fa-angle-down",
        arrow3: "fa-angle-down",
        arrow4: "fa-angle-down",
      });
    } else {
      this.setState({
        dropdown2: "",
        arrow2: "fa-angle-down",
      });
    }
  };

  handleClick3 = () => {
    if (this.state.dropdown3 === "") {
      this.setState({
        dropdown3: "is-active",
        dropdown2: "",
        dropdown: "",
        dropdown4: "",
        arrow3: "fa-angle-up",
        arrow2: "fa-angle-down",
        arrow: "fa-angle-down",
        arrow4: "fa-angle-down",
      });
    } else {
      this.setState({
        dropdown3: "",
        arrow3: "fa-angle-down",
      });
    }
  };

  handleClick4 = () => {
    if (this.state.dropdown4 === "") {
      this.setState({
        dropdown4: "is-active",
        dropdown2: "",
        dropdown3: "",
        dropdown: "",
        arrow4: "fa-angle-up",
        arrow2: "fa-angle-down",
        arrow3: "fa-angle-down",
        arrow: "fa-angle-down",
      });
    } else {
      this.setState({
        dropdown4: "",
        arrow4: "fa-angle-down",
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className={`section container5`}>
          <div className="container">
            <h1 id={this.state.modalActive} className="title">
              {this.state.currentSyllabus}
            </h1>
          </div>

          <div className="syllabusContainer">
            <h1 className="syllabusTitle">Contact</h1>
            <div>
              <Dropdown
                handleUpdateContactSelected={this.handleUpdateContactSelected}
                selected={this.state.contactSelected}
                handleClick={this.handleClick}
                dropdown={this.state.dropdown}
                arrow={this.state.arrow}
              />
            </div>

            <div className="syllabusButtonContainer">
              <button
                id="syllabusButton"
                data-id="contact"
                onClick={this.handleClickOpenSyllabus}
                className="syllabusButton button is-dark"
              >
                open syllabus
              </button>
            </div>

            <h1 className="syllabusTitle">Instruments</h1>
            <div>
              <Dropdown2
                handleUpdateInstrumentSelected={
                  this.handleUpdateInstrumentSelected
                }
                selected={this.state.instrumentSelected}
                handleClick={this.handleClick2}
                dropdown={this.state.dropdown2}
                arrow={this.state.arrow2}
              />
            </div>

            <div className="syllabusButtonContainer">
              <button
                id="syllabusButton"
                data-id="instrument"
                onClick={this.handleClickOpenSyllabus}
                className="syllabusButton button is-dark"
              >
                open syllabus
              </button>
            </div>

            <h1 className="syllabusTitle">Formation</h1>
            <div>
              <Dropdown3
                handleUpdateFormationSelected={
                  this.handleUpdateFormationSelected
                }
                selected={this.state.formationSelected}
                handleClick={this.handleClick3}
                dropdown={this.state.dropdown3}
                arrow={this.state.arrow3}
              />
            </div>

            <div className="syllabusButtonContainer">
              <button
                id="syllabusButton"
                data-id="formation"
                onClick={this.handleClickOpenSyllabus}
                className="syllabusButton button is-dark"
              >
                open syllabus
              </button>
            </div>

            <h1 className="syllabusTitle">Navigation</h1>
            <div>
              <Dropdown4
                handleUpdateNavigationSelected={
                  this.handleUpdateNavigationSelected
                }
                selected={this.state.navigationSelected}
                handleClick={this.handleClick4}
                dropdown={this.state.dropdown4}
                arrow={this.state.arrow4}
              />
            </div>

            <div className="syllabusButtonContainer">
              <button
                id="syllabusButton"
                data-id="navigation"
                onClick={this.handleClickOpenSyllabus}
                className="syllabusButton button is-dark"
              >
                open syllabus
              </button>
            </div>

            {/* =============================== modals ============================================== */}

            {Object.keys(this.state.syllabusModals).map((key) => {
              return (
                <div
                  className={`modal ${this.state.syllabusModals[key]["is-active"]}`}
                >
                  <div className="modal-background">
                    <div className="pagesContainer">
                      <button
                        data-id={key}
                        onClick={this.handleCloseSyllabusModal}
                        id="syllabusPagesCloseButton"
                        className="button is-danger syllabusPagesCloseButton"
                      >
                        {" "}
                        <i
                          data-id={key}
                          onClick={this.handleCloseSyllabusModal}
                          className="fa fa-undo fa-2x"
                        ></i>
                      </button>

                      <button
                        data-id={key}
                        onClick={this.handleCloseSyllabusModal}
                        className="delete is-large"
                        aria-label="close"
                      ></button>

                      {this.state.syllabusModals[key]["pages"].map((page) => {
                        return (
                          <React.Fragment>
                            <Suspense
                              fallback={
                                <div className="modal-background-syllabus-pages2">
                                  <i className="fa fa-spinner fa-2x fa-spin"></i>
                                  Page is loading...
                                </div>
                              }
                            >
                              <LazyCss />

                              <div
                                className={`modal-background-syllabus-pages ${page}`}
                              ></div>
                            </Suspense>

                            {page.split(" ")[page.split(" ").length - 1] !==
                            "lastPage" ? (
                              <div className="horizontalDivider"></div>
                            ) : (
                              <div id="hide"></div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ====================================================================================== */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Syllabus;
