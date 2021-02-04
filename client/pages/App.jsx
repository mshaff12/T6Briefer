import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Told from "./Told.jsx";
import Syllabus from "./Syllabus.jsx";
import EPPage from "./EPPage.jsx";
import GougePage from "./GougePage.jsx";
import InstallPWA from "../components/Dropdowns/InstallPWA.jsx";
import FeedbackForm from "../components/Dropdowns/FeedbackForm.jsx";

const LazyCss = lazy(() => import("./LazyCss.jsx"));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homepageVisible: "",
      modalActive: false,
      installEvent: "",
      feedbackModalActive: "",
    };
    this.hideNav = this.hideNav.bind(this);
    this.showNav = this.showNav.bind(this);
    this.closeFeedbackModal = this.closeFeedbackModal.bind(this);
    this.openFeedbackModal = this.openFeedbackModal.bind(this);
  }

  closeFeedbackModal() {
    this.setState({
      feedbackModalActive: "",
    });
  }

  openFeedbackModal() {
    this.setState({
      feedbackModalActive: "is-active",
    });
  }

  // componentDidMount() {
  //   window.addEventListener("beforeinstallprompt", (e) => {
  //     e.preventDefault();
  //     this.setState(
  //       {
  //         installEvent: e,
  //       },
  //       () => {
  //         console.log(this.state.installEvent);
  //       }
  //     );
  //   });
  // }

  hideNav(e) {
    this.setState({
      homepageVisible: "hide",
      modalActive: true,
    });
  }

  showNav(e) {
    e.preventDefault();
    this.setState({
      homepageVisible: "",
      modalActive: true,
    });
    this.handleSetModalActive = this.handleSetModalActive.bind(this);
  }

  handleSetModalActive() {
    if (this.state.modalActive) {
      this.setState({
        modalActive: true,
      });
    } else {
      this.setState({
        modalActive: false,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <section
            className={`section container1 ${this.state.homepageVisible}`}
          >
            <div className="container container2">
              <h1 className="title">
                <span className="forTheMargin">
                  <span className="t6CircleIcon"></span>
                </span>
                T6 BRIEFER
                <span className="forTheMargin2">
                  <span className="t6CircleIcon"></span>
                </span>
              </h1>

              <h3 className="earlyAccess">*EARLY ACCESS*</h3>

              <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-2">
                <button className="button2 button is-dark">
                  VT-2 Front Page / Schedule
                </button>
              </a>
              <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-3">
                <button id="gray" className="button3 button is-dark">
                  VT-3 Front Page / Schedule
                </button>
              </a>
              <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-6">
                <button className="button6 button is-dark">
                  VT-6 Front Page / Schedule
                </button>
              </a>
              <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-27">
                <button id="gray" className="button27 button is-dark">
                  VT-27 Front Page / Schedule
                </button>
              </a>
              <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-28">
                <button className="button27 button is-dark">
                  VT-28 Front Page / Schedule
                </button>
              </a>

              <div className="t6diagram">
                <div className="wings"></div>
              </div>

              <div className="vtPatches">
                <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-2">
                  <span className="vt2Patch"></span>
                </a>
                <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-3">
                  <span className="vt3Patch"></span>
                </a>
                <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-6">
                  <span className="vt6Patch"></span>
                </a>
              </div>
              <div className="vtPatches2">
                <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-27">
                  <span className="vt27Patch"></span>
                </a>
                <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-28">
                  <span className="vt28Patch"></span>
                </a>
              </div>

              <div className={`modal ${this.state.feedbackModalActive}`}>
                <div className="modal-background"></div>
                <div className="modal-card epModal">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Submit Feedback</p>
                    <button
                      onClick={this.closeFeedbackModal}
                      className="delete"
                      aria-label="close"
                    ></button>
                  </header>
                  <div className="modal-card-body">
                    <FeedbackForm
                      closeFeedbackModal={this.closeFeedbackModal}
                    />
                  </div>
                </div>
              </div>

              <InstallPWA />
              {/* <button
                id="installButtonTest"
                className="installButton button is-danger"
              >
                install app
              </button> */}

              <button
                onClick={this.openFeedbackModal}
                className="feedbackButton button is-dark"
              >
                send feedback
              </button>

              <Suspense fallback={<div id="hide"></div>}>
                <LazyCss />
              </Suspense>
            </div>
          </section>

          <nav className="nav navBar">
            <div className="nav-right nav-menu">
              <div className="nav-item">
                <div className="field is-grouped">
                  <div className="navIconContainer">
                    <p className="control navIconP" onClick={this.showNav}>
                      <Link
                        to={{
                          pathname: "/",
                        }}
                      >
                        <div className="center">
                          <i className="icon fa fa-home fa-2x"></i>
                          <div className="iconText">HOME</div>
                        </div>
                      </Link>
                    </p>

                    <p
                      className="control navIconP toldIcon"
                      onClick={this.hideNav}
                    >
                      <Link
                        to={{
                          pathname: "/Told",
                        }}
                      >
                        <div className="center">
                          <i className="fa fa-plane fa-2x"></i>
                          <div className="iconText">TOLD</div>
                        </div>
                      </Link>
                    </p>

                    <p
                      className="control navIconP whiteboardIcon"
                      onClick={this.hideNav}
                    >
                      <Link
                        to={{
                          pathname: "/Syllabus",
                          state: {
                            hideNav: this.hideNav,
                          },
                        }}
                      >
                        <div className="center">
                          <div>
                            <i className=" fa fa-desktop fa-2x"></i>
                          </div>
                          <div className="iconText">SYLLABUS</div>
                        </div>
                      </Link>
                    </p>
                    <p
                      className="control navIconP epIcon"
                      onClick={this.hideNav}
                    >
                      <Link
                        to={{
                          pathname: "/EPPage",
                        }}
                      >
                        <div className="center">
                          <i className="fa fa-tachometer fa-2x"></i>
                          <div className="iconText">{`EP'S & LIMITS`}</div>
                        </div>
                      </Link>
                    </p>
                    {/* <p
                      className="control navIconP gougeIcon"
                      onClick={this.hideNav}
                    >
                      <Link
                        to={{
                          pathname: "/Gouge",
                        }}
                      >
                        <div className="center">
                          <i className=" fa fa-book fa-2x"></i>
                          <div className="iconText">Gouge</div>
                        </div>
                      </Link>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Route path="/Told" component={Told} />
          <Route path="/Syllabus" component={Syllabus} />
          <Route path="/EPPage" component={EPPage} />
          <Route path="/Gouge" component={GougePage} />
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
