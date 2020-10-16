import React, { Component } from "react";

class EPPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
modalActive: {"ep1": '', "ep2": '', "ep3": '', "ep4": '', "ep5": '', "ep6": '', "ep7": '', "ep8": '', "ep9": '', "ep10": '', "ep11": '', "ep12": '', "ep13": '', "ep14": '', "ep15": '', "ep16": ''},
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleClickEP = this.handleClickEP.bind(this);
  }

handleClickEP(e) {
  e.preventDefault();

  var epNumber = e.target.getAttribute('data-id');
  var oldModalActive = this.state.modalActive;
  oldModalActive[epNumber] = 'is-active',

  this.setState({
    modalActive: oldModalActive,
  })
}

handleCloseModal(e) {
  e.preventDefault();

  var epNumber = e.target.getAttribute('data-id');
  var oldModalActive = this.state.modalActive;
  oldModalActive[epNumber] = '',

  this.setState({
    modalActive: oldModalActive,
  })

}

  render() {
    return (
      <React.Fragment>
        <section className={`section container1`}>
    <div className="container">
      <h1 className="title">
        {`EPs & Limits`}
      </h1>


{/* need one of these for each EP? D: */}

      <div className={`modal ${this.state.modalActive.ep1}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP1 name</p>
      <button data-id='ep1' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP1 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep1' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep2}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP2 name</p>
      <button data-id='ep2' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP2 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep2' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep3}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP3 name</p>
      <button data-id='ep3' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP3 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep3' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep4}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP4 name</p>
      <button data-id='ep4' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP4 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep4' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep5}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP5 name</p>
      <button data-id='ep5' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP5 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep5' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep6}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP6 name</p>
      <button data-id='ep6' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP6 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep6' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep7}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP7 name</p>
      <button data-id='ep7' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP7 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep7' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep8}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP8 name</p>
      <button data-id='ep8' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP8 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep8' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep9}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP9 name</p>
      <button data-id='ep9' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP9 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep9' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep10}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP10 name</p>
      <button data-id='ep10' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP10 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep10' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep11}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP11 name</p>
      <button data-id='ep11' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP11 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep11' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep12}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP12 name</p>
      <button data-id='ep12' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP12 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep12' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep13}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP13 name</p>
      <button data-id='ep13' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP13 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep13' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep14}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP14 name</p>
      <button data-id='ep14' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP14 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep14' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep15}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP15 name</p>
      <button data-id='ep15' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP15 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep15' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<div className={`modal ${this.state.modalActive.ep16}`}>
  <div className="modal-background"></div>
  <div className="modal-card epModal">
    <header className="modal-card-head">
      <p className="modal-card-title">EP16 name</p>
      <button data-id='ep16' onClick={this.handleCloseModal} className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP16 procedures go here
    </section>
    <footer className="modal-card-foot">
      <button data-id='ep16' onClick={this.handleCloseModal} className="button is-dark">Close</button>
    </footer>
  </div>
</div>

<button id='limits' className="button2 button is-dark"><span className='spanLimits'>Limits</span></button>

      <button data-id='ep1' onClick={this.handleClickEP} className="button2 button is-dark">EP1</button>
      <button data-id='ep2' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP2</button>
      <button data-id='ep3' onClick={this.handleClickEP} className="button2 button is-dark">EP3</button>
      <button data-id='ep4' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP4</button>
      <button data-id='ep5' onClick={this.handleClickEP} className="button2 button is-dark">EP5</button>
      <button data-id='ep6' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP6</button>
      <button data-id='ep7' onClick={this.handleClickEP} className="button2 button is-dark">EP7</button>
      <button data-id='ep8' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP8</button>
      <button data-id='ep9' onClick={this.handleClickEP} className="button2 button is-dark">EP9</button>
      <button data-id='ep10' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP10</button>
      <button data-id='ep11' onClick={this.handleClickEP} className="button2 button is-dark">EP11</button>
      <button data-id='ep12' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP12</button>
      <button data-id='ep13' onClick={this.handleClickEP} className="button2 button is-dark">EP13</button>
      <button data-id='ep14' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP14</button>
      <button data-id='ep15' onClick={this.handleClickEP} className="button2 button is-dark">EP15</button>
      <button data-id='ep16' onClick={this.handleClickEP} id='gray' className="button3 button is-dark">EP16</button>



    </div>
  </section>
      </React.Fragment>
    );

  }
}

  export default EPPage;
