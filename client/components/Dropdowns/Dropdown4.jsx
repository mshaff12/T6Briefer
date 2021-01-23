import React, { Component } from "react";

function Dropdown4(props) {
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
    <div className="dropdown-content syllabusDropdownContent">
      <a  data-id="N4100" onClick={props.handleUpdateNavigationSelected}  className="dropdown-item">
        N4100
      </a>
      <a data-id="N4200" onClick={props.handleUpdateNavigationSelected}  className="dropdown-item">
        N4200
      </a>
    </div>
  </div>
</div>
</div>
  );
};


export default Dropdown4;