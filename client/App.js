import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Told from './components/Told.js';
import WhiteBoard from './components/WhiteBoard.js';
import EPPage from './components/EPPage.js';
import GougePage from './components/GougePage.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
          homepageVisible: '',
    };
this.hideNav = this.hideNav.bind(this);
this.showNav = this.showNav.bind(this);
  }

  hideNav(e) {
e.preventDefault();
this.setState({
  homepageVisible: 'hide',
})
  }

  showNav(e) {
    e.preventDefault();
    this.setState({
      homepageVisible: '',
    })
      }



  render() {

  return (
   <React.Fragment>
     <HashRouter>
     <section className={`section container1 ${this.state.homepageVisible}`}>
    <div className="container">
      <h1 className="title">
        T6 Homepage
      </h1>
      <p className="subtitle">
        woohoo
      </p>
    </div>
  </section>


<nav className="nav navBar">
          <div className="nav-right nav-menu">
            <div className="nav-item">
              <div className="field is-grouped">

                <p className="control navIconP" onClick={this.showNav}>
                <Link to={{
  pathname: '/',
}}>
                <div className='center'>
    <i className="fa fa-home fa-2x"></i>
    <div className='iconText'>Home</div>
                 </div>
</Link>
                </p>

                <p className="control navIconP toldIcon" onClick={this.hideNav}>
                <Link to={{
  pathname: '/Told',
}}>
                  <div className='center'>
    <i className="fa fa-home fa-2x"></i>
    <div className='iconText'>TOLD</div>
</div>
</Link>
                </p>

                <p className="control navIconP whiteboardIcon" onClick={this.hideNav}>
                <Link to={{
  pathname: '/WhiteBoard',
}}>
                <div className='center'>
  <div>
    <i className="fa fa-home fa-2x"></i>
  </div>
    <div className='iconText'>White Board</div>
</div>
</Link>
                </p>
                <p className="control navIconP epIcon" onClick={this.hideNav}>
                <Link to={{
  pathname: '/EPPage',
}}>
                <div className='center'>
    <i className="fa fa-tachometer fa-2x"></i>
  <div className='iconText'>{`EPs & Limits`}</div>
</div>
</Link>
                </p>
                <p className="control navIconP gougeIcon" onClick={this.hideNav}>
                <Link to={{
  pathname: '/Gouge',
}}>
<div className='center'>
    <i className="fa fa-sticky-note fa-2x"></i>
    <div className='iconText'>Gouge</div>
</div>
</Link>
</p>

              </div>
            </div>
          </div>
        </nav>

        <Route path="/Told" component={Told} />
        <Route path="/WhiteBoard" component={WhiteBoard} />
        <Route path="/EPPage" component={EPPage} />
        <Route path="/Gouge" component={GougePage} />

        </HashRouter>
   </React.Fragment>
  )
 }
}

export default App;
