import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const InstallPWA = lazy(() => import("../components/InstallPWA.jsx"));
const FeedbackForm = lazy(() => import("../components/FeedbackForm.jsx"));

const LazyCss = lazy(() => import("./LazyCss.jsx"));

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
      installEvent: "",
      feedbackModalActive: "",
    };

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
        <div id="homePageTitle" className="title">
          <span className="forTheMargin">
            <span className="t6CircleIcon"></span>
          </span>
          T6 BRIEFER
          <span className="forTheMargin2">
            <span className="t6CircleIcon"></span>
          </span>
        </div>

        {/* <h3 className="earlyAccess">*EARLY ACCESS*</h3> */}
        <h2 className="squadronFrontPagesTitle">SQUADRON FRONT PAGES</h2>

        <section className={`section container6`}>
          <div className="container container2">
            {/* <a href="https://www.cnatra.navy.mil/scheds/schedule_data.aspx?sq=vt-2">
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
      </a> */}

            <div className="containerSquadronButtons">
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
            </div>

            {/* <div className="t6diagram">
              <div className="wings"></div>
            </div> */}

            <div className={`modal ${this.state.feedbackModalActive}`}>
              <div className="modal-background"></div>
              <div className="modal-card feedbackModal">
                <header className="modal-card-head">
                  <p className="modal-card-title">Submit Feedback</p>
                  <button
                    onClick={this.closeFeedbackModal}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <div className="modal-card-body modal-card-body-feedback">
                  <Suspense fallback={<div id="hide"></div>}>
                    <FeedbackForm
                      closeFeedbackModal={this.closeFeedbackModal}
                    />
                  </Suspense>
                </div>
              </div>
            </div>

            <Suspense fallback={<div id="hide"></div>}>
              <InstallPWA />
            </Suspense>
            {/* <button
        id="installButtonTest"
        className="installButton button is-danger"
      >
        install app
      </button> */}

            <button
              onClick={this.openFeedbackModal}
              id="feedbackButton"
              className="feedbackButton button is-dark"
            >
              send feedback
            </button>

            <Suspense fallback={<div id="hide"></div>}>
              <LazyCss />
            </Suspense>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
