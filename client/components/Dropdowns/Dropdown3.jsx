import React, { Component } from "react";

function Dropdown3(props) {
  return (
    <div className='dropdownContainer'>
   <div onClick = {props.handleClick} className = {`width100 dropdown ${props.dropdown}`}>
  <div className="width100 dropdown-trigger">
    <button className="width100 syllabusDropdownButton button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>{props.selected}</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a  data-id="F4100" onClick={props.handleUpdateFormationSelected} className="dropdown-item">
        F4100
      </a>
      <a data-id="F4201" onClick={props.handleUpdateFormationSelected} className="dropdown-item">
        F4201
      </a>
      <a  data-id="F4300" onClick={props.handleUpdateFormationSelected} className="dropdown-item">
        F4300
      </a>
    </div>
  </div>
</div>
</div>
  );
};


export default Dropdown3;