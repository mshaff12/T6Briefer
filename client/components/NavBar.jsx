import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Told from "../pages/Told.jsx";
import Syllabus from "../pages/Syllabus.jsx";
import EPPage from "../pages/EPPage.jsx";
import GougePage from "../pages/GougePage.jsx";
import Home from "../pages/Home.jsx";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <nav className="nav navBar">
          <div className="nav-right nav-menu">
            <div className="nav-item">
              <div className="field is-grouped">
                <div className="navIconContainer">
                  <p className="control navIconP">
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

                  <p className="control navIconP toldIcon">
                    <Link
                      to={{
                        pathname: "/Told",
                      }}
                    >
                      <div className="center">
                        <i className="fa icon2 fa-plane fa-2x"></i>
                        <div className="iconText">TOLD</div>
                      </div>
                    </Link>
                  </p>

                  <p className="control navIconP whiteboardIcon">
                    <Link
                      to={{
                        pathname: "/Syllabus",
                      }}
                    >
                      <div className="center">
                        <div>
                          <i className=" fa icon3 fa-desktop fa-2x"></i>
                        </div>
                        <div className="iconText">SYLLABUS</div>
                      </div>
                    </Link>
                  </p>
                  <p className="control navIconP epIcon">
                    <Link
                      to={{
                        pathname: "/EPPage",
                      }}
                    >
                      <div className="center">
                        <i className="fa icon4 fa-tachometer fa-2x"></i>
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

        <Route exact path="/" component={Home} />
        <Route path="/Told" component={Told} />
        <Route path="/Syllabus" component={Syllabus} />
        <Route path="/EPPage" component={EPPage} />
        <Route path="/Gouge" component={GougePage} />
      </HashRouter>
    );
  }
}

export default NavBar;
