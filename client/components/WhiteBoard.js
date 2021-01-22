import React, { Component } from "react";



function Dropdown(props) {
  return (
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
  );
};

function Dropdown2(props) {
  return (
   <div onClick = {props.handleClick} className = {`width100 dropdown ${props.dropdown}`}>
  <div className="width100 dropdown-trigger">
    <button className="width100 button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>{props.selected}</span>
      <span className="icon is-small">
        <i className={`fa ${props.arrow}`} aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a   data-id="I4100" onClick={props.handleUpdateInstrumentSelected} className="dropdown-item">
        I4100
      </a>
      <a  data-id="I4200" onClick={props.handleUpdateInstrumentSelected} className="dropdown-item">
        I4200
      </a>
      <a   data-id="I4300" onClick={props.handleUpdateInstrumentSelected} className="dropdown-item">
        I4300
      </a>
      <a   data-id="I4490" onClick={props.handleUpdateInstrumentSelected} className="dropdown-item">
        I4490
      </a>
    </div>
  </div>
</div>
  );
};

function Dropdown3(props) {
  return (
   <div onClick = {props.handleClick} className = {`width100 dropdown ${props.dropdown}`}>
  <div className="width100 dropdown-trigger">
    <button className="width100 button" aria-haspopup="true" aria-controls="dropdown-menu">
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
  );
};

function Dropdown4(props) {
  return (
   <div onClick = {props.handleClick} className = {`width100 dropdown ${props.dropdown}`}>
  <div className="width100 dropdown-trigger">
    <button className="width100 button" aria-haspopup="true" aria-controls="dropdown-menu">
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
      arrow4: "fa-angle-down",
      contactSelected: "C4100",
      instrumentSelected: "I4100",
      formationSelected: "F4100",
      navigationSelected: "N4100",
      syllabusModals: {"C4100": {"is-active": "", "pages": ['syllabus-C41_1 firstPage', 'syllabus-C41_2', 'syllabus-C41_3 lastPage']}, "C4200": {"is-active": "", "pages": ['syllabus-C42_1 firstPage', 'syllabus-C42_2', 'syllabus-C42_3 lastPage']}, "C4300": {"is-active": "", "pages": ['syllabus-C43_1 firstPage', 'syllabus-C43_2', 'syllabus-C43_3 lastPage']}, "C4490": {"is-active": "", "pages": ['syllabus-C44_1 firstPage', 'syllabus-C44_2 lastPage']}, "C4501": {"is-active": "", "pages": ['syllabus-C45_1 firstPage', 'syllabus-C45_2 lastPage']}, "C4600": {"is-active": "", "pages": ['syllabus-C46_1 firstPage', 'syllabus-C46_2', 'syllabus-C46_3 lastPage']}, "C4790": {"is-active": "", "pages": ['syllabus-C47_1 firstPage', 'syllabus-C47_2 lastPage']}, "C4801": {"is-active": "", "pages": ['syllabus-C48_1 firstPage', 'syllabus-C48_2 lastPage']}, "C4901": {"is-active": "", "pages": ['syllabus-C49_1 firstPage', 'syllabus-C49_2 lastPage']}, "I4100": {"is-active": "", "pages": ['syllabus-I41_1 firstPage', 'syllabus-I41_2', 'syllabus-I41_3 lastPage']}, "I4200": {"is-active": "", "pages": ['syllabus-I42_1 firstPage', 'syllabus-I42_2', 'syllabus-I42_3 lastPage']}, "I4300": {"is-active": "", "pages": ['syllabus-I43_1 firstPage', 'syllabus-I43_2', 'syllabus-I43_3 lastPage']}, "I4490": {"is-active": "", "pages": ['syllabus-I44_1 firstPage', 'syllabus-I44_2', 'syllabus-I44_3 lastPage']}, "N4100": {"is-active": "", "pages": ['syllabus-N41_1 firstPage', 'syllabus-N41_2 lastPage']}, "N4200": {"is-active": "", "pages": ['syllabus-N42_1 firstPage', 'syllabus-N42_2 lastPage']}, "F4100": {"is-active": "", "pages": ['syllabus-F41_1 firstPage', 'syllabus-F41_2', 'syllabus-F41_3 lastPage']}, "F4201": {"is-active": "", "pages": ['syllabus-F42_1 firstPage', 'syllabus-F42_2 lastPage']}, "F4300": {"is-active": "", "pages": ['syllabus-F43_1 firstPage', 'syllabus-F43_2', 'syllabus-F43_3 lastPage']}},
      currentSyllabus: "Syllabus",
      modalActive: "",

    };
this.handleClickOpenSyllabus = this.handleClickOpenSyllabus.bind(this);
this.handleUpdateContactSelected = this.handleUpdateContactSelected.bind(this);
this.handleUpdateInstrumentSelected = this.handleUpdateInstrumentSelected.bind(this);
this.handleUpdateFormationSelected = this.handleUpdateFormationSelected.bind(this);
this.handleUpdateNavigationSelected = this.handleUpdateNavigationSelected.bind(this);

this.handleCloseSyllabusModal = this.handleCloseSyllabusModal.bind(this);
  }


  handleCloseSyllabusModal(e) {
    // this.props.location.state.hideTitle();

    this.setState({
      currentSyllabus: 'Syllabus',
      modalActive: "",
    })

var modalToClose = e.target.getAttribute('data-id');

var oldModalState = this.state.syllabusModals;

oldModalState[modalToClose]["is-active"] = "";

this.setState({
  syllabusModals: oldModalState,
})

  }

  handleUpdateContactSelected (e) {
    var contact = e.target.getAttribute('data-id')

this.setState({
  contactSelected: contact,
})

  }
  handleUpdateInstrumentSelected (e) {
    var instrument = e.target.getAttribute('data-id')

this.setState({
  instrumentSelected: instrument,
})

  }

  handleUpdateFormationSelected (e) {
    var formation = e.target.getAttribute('data-id')

this.setState({
  formationSelected: formation,
})

  }

  handleUpdateNavigationSelected (e) {
    var navigation = e.target.getAttribute('data-id')

this.setState({
  navigationSelected: navigation,
})

  }

  handleClickOpenSyllabus(e) {
    console.log(this.props)
    if(this.props.location.state !== undefined) {
      this.props.location.state.hideNav();
    }

    var subject = e.target.getAttribute('data-id')

this.setState({
  currentSyllabus: this.state.contactSelected,
  modalActive: "hide",
})


    if(subject === "contact") {


        var oldModalState = this.state.syllabusModals;

        oldModalState[this.state.contactSelected]["is-active"] = "is-active";

        this.setState({
          syllabusModals: oldModalState,
        })

    } else if (subject === "instrument") {

      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.instrumentSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      })

    } else if (subject === 'navigation') {

      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.navigationSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      })


    } else if (subject === 'formation') {

      var oldModalState = this.state.syllabusModals;

      oldModalState[this.state.formationSelected]["is-active"] = "is-active";

      this.setState({
        syllabusModals: oldModalState,
      })


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
        dropdown: "",
        dropdown3: "",
        dropdown4: "",
        arrow2: "fa-angle-up",
        arrow: "fa-angle-down",
        arrow3: "fa-angle-down",
        arrow4: "fa-angle-down",
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
        dropdown2: "",
        dropdown: "",
        dropdown4: "",
        arrow3: "fa-angle-up",
        arrow2: "fa-angle-down",
        arrow: "fa-angle-down",
        arrow4: "fa-angle-down",
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
        dropdown2: "",
        dropdown3: "",
        dropdown: "",
        arrow4: "fa-angle-up",
        arrow2: "fa-angle-down",
        arrow3: "fa-angle-down",
        arrow: "fa-angle-down",
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
      <h1 id={this.state.modalActive} className="title">
        {this.state.currentSyllabus}
      </h1>
    </div>

    <div className='syllabusContainer'>
      <h1 className='syllabusTitle'>
        Contact
      </h1>
    <div>
      <Dropdown
      handleUpdateContactSelected = {this.handleUpdateContactSelected}
      selected = {this.state.contactSelected}
      handleClick = {this.handleClick}
      dropdown = {this.state.dropdown}
      arrow = {this.state.arrow}
      />
    </div>

<button data-id='contact' onClick={this.handleClickOpenSyllabus} className='syllabusButton button is-dark'>open syllabus</button>

    <h1 className='syllabusTitle'>
      Instruments
    </h1>
    <div>
    <Dropdown2
     handleUpdateInstrumentSelected = {this.handleUpdateInstrumentSelected}
     selected = {this.state.instrumentSelected}
      handleClick = {this.handleClick2}
      dropdown = {this.state.dropdown2}
      arrow = {this.state.arrow2}
      />
    </div>

    <button data-id='instrument' onClick={this.handleClickOpenSyllabus} className='syllabusButton button is-dark'>open syllabus</button>

    <h1 className='syllabusTitle'>
      Formation
    </h1>
    <div>
    <Dropdown3
     handleUpdateFormationSelected = {this.handleUpdateFormationSelected}
     selected = {this.state.formationSelected}
      handleClick = {this.handleClick3}
      dropdown = {this.state.dropdown3}
      arrow = {this.state.arrow3}
      />
    </div>

    <button data-id='formation' onClick={this.handleClickOpenSyllabus} className='syllabusButton button is-dark'>open syllabus</button>

    <h1 className='syllabusTitle'>
      Navigation
    </h1>
    <div>
    <Dropdown4
     handleUpdateNavigationSelected = {this.handleUpdateNavigationSelected}
     selected = {this.state.navigationSelected}
      handleClick = {this.handleClick4}
      dropdown = {this.state.dropdown4}
      arrow = {this.state.arrow4}
      />
    </div>

    <button data-id='navigation' onClick={this.handleClickOpenSyllabus} className='syllabusButton button is-dark'>open syllabus</button>

{/* =============================== modals ============================================== */}

{Object.keys(this.state.syllabusModals).map((key) => {

  return <div className={`modal ${this.state.syllabusModals[key]['is-active']}`}>
  <div className="modal-background">

  <div className='pagesContainer'>

  <button  data-id={key} onClick={this.handleCloseSyllabusModal} className="button is-danger syllabusPagesCloseButton">  <i data-id={key} onClick={this.handleCloseSyllabusModal} className="fa fa-undo fa-2x"></i></button>

  <button  data-id={key} onClick={this.handleCloseSyllabusModal} className="delete is-large" aria-label="close"></button>


    {this.state.syllabusModals[key]['pages'].map((page) => {

    return <React.Fragment>
    <div className={`modal-background-syllabus-pages ${page}`}>
    </div>
    { page.split(' ')[page.split(' ').length - 1] !== 'lastPage' ?
    <div className='horizontalDivider'></div> :
    <div id='hide'></div>
    }
    </React.Fragment>

    })}

  </div>
</div>
</div>})}

{/* ====================================================================================== */}
    </div>
  </section>
      </React.Fragment>
    );




  }
}

  export default WhiteBoard;
