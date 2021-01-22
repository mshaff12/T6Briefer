import React, { Component } from "react";

function Dropdown(props) {
  return (
    <div className='dropdownContainer'>

   <div onClick = {props.handleClick} className = {`dropdown width100 ${props.dropdown}`}>
  <div className="dropdown-trigger width100">
    <button className="width100 button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>{props.selected}</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a  data-id="C4100" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4100
      </a>
      <a data-id="C4200" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4200
      </a>
      <a  data-id="C4300" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4300
      </a>
      <a  data-id="C4490" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4490
      </a>
      <a  data-id="C4501" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4501
      </a>
      <a  data-id="C4600" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4600
      </a>
      <a  data-id="C4790" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4790
      </a>
      <a  data-id="C4801" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4801
      </a>
      <a  data-id="C4901" onClick={props.handleUpdateContactSelected} className="dropdown-item">
        C4901
      </a>
    </div>
  </div>
</div>

</div>

  );
};


export default Dropdown;
