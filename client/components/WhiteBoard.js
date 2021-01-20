import React, { Component } from "react";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import SplitButton from 'react-bootstrap/SplitButton'
// import { createPopper } from '@popperjs/core';
// import 'bootstrap/dist/css/bootstrap.css';


class WhiteBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {
    return (
      <React.Fragment>
       <section className={`section container1`}>
    <div className="container">
      <h1 className="title">
        Syllabus
      </h1>
    </div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </section>
      </React.Fragment>
    );




  }
}

  export default WhiteBoard;
