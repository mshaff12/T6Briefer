import React, { Component } from "react";



function Dropdown(props) {
  return (
   <div onClick = {props.handleClick} className = {`dropdown ${props.dropdown}`}> 
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>C4100</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        C4100
      </a>
      <a className="dropdown-item">
        C4200
      </a>
      <a href="#" className="dropdown-item is-active">
        C4300
      </a>
      <a href="#" className="dropdown-item">
        C4490
      </a>
      <a href="#" className="dropdown-item">
        C4501
      </a>
    </div>
  </div>
</div>
  );
};

function Dropdown2(props) {
  return (
   <div onClick = {props.handleClick} className = {`dropdown ${props.dropdown}`}> 
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>I4100</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        I4100
      </a>
      <a className="dropdown-item">
        I4200
      </a>
      <a href="#" className="dropdown-item is-active">
        I4300
      </a>
      <a href="#" className="dropdown-item">
        I4490
      </a>
    </div>
  </div>
</div>
  );
};

function Dropdown3(props) {
  return (
   <div onClick = {props.handleClick} className = {`dropdown ${props.dropdown}`}> 
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>F4100</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        F4100
      </a>
      <a className="dropdown-item">
        F4201
      </a>
      <a href="#" className="dropdown-item is-active">
        F4300
      </a>
    </div>
  </div>
</div>
  );
};

function Dropdown4(props) {
  return (
   <div onClick = {props.handleClick} className = {`dropdown ${props.dropdown}`}> 
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>N4100</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        N4100
      </a>
      <a className="dropdown-item">
        N4200
      </a>
    </div>
  </div>
</div>
  );
};


class WhiteBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdown: "",
      arrow: "fa-angle-down",
      dropdown2: "",
      arrow2: "fa-angle-down",
      dropdown3: "",
      arrow3: "fa-angle-down",
      dropdown4: "",
      arrow4: "fa-angle-down"
    };

  }

  handleClick = () => {
    if (this.state.dropdown === "") {
      this.setState({
        dropdown: "is-active",
        arrow: "fa-angle-up"
      });
    }
    else {
      this.setState({
        dropdown: "",
        arrow: "fa-angle-down"
      });
    }
  };

  handleClick2 = () => {
    if (this.state.dropdown2 === "") {
      this.setState({
        dropdown2: "is-active",
        arrow2: "fa-angle-up"
      });
    }
    else {
      this.setState({
        dropdown2: "",
        arrow2: "fa-angle-down"
      });
    }
  };

  handleClick3 = () => {
    if (this.state.dropdown3 === "") {
      this.setState({
        dropdown3: "is-active",
        arrow3: "fa-angle-up"
      });
    }
    else {
      this.setState({
        dropdown3: "",
        arrow3: "fa-angle-down"
      });
    }
  };

  handleClick4 = () => {
    if (this.state.dropdown4 === "") {
      this.setState({
        dropdown4: "is-active",
        arrow4: "fa-angle-up"
      });
    }
    else {
      this.setState({
        dropdown4: "",
        arrow4: "fa-angle-down"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
       <section className={`section container1`}>
    <div className="container">
      <h1 className="title">
        Syllabus
      </h1>
    </div>
      <h1>
        Contact
      </h1>
    <div>
      <Dropdown 
      handleClick = {this.handleClick}
      dropdown = {this.state.dropdown}
      arrow = {this.state.arrow}
      />
    </div>
    <h1>
      Instrument
    </h1>
    <div>
    <Dropdown2 
      handleClick = {this.handleClick2}
      dropdown = {this.state.dropdown2}
      arrow = {this.state.arrow2}
      />
    </div>
    <h1>
      Formation
    </h1>
    <div>
    <Dropdown3 
      handleClick = {this.handleClick3}
      dropdown = {this.state.dropdown3}
      arrow = {this.state.arrow3}
      />
    </div>
    <h1>
      Navigation
    </h1>
    <div>
    <Dropdown4 
      handleClick = {this.handleClick4}
      dropdown = {this.state.dropdown4}
      arrow = {this.state.arrow4}
      />
    </div>
  </section>
      </React.Fragment>
    );




  }
}

  export default WhiteBoard;
