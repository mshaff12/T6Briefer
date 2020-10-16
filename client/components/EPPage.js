import React, { Component } from "react";

class EPPage extends Component {

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
        {`EPs & Limits`}
      </h1>


{/* need one of these for each EP? D: */}

      {/* <div className="modal">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">EP name</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
EP procedures go here
    </section>
    <footer className="modal-card-foot">
      <button className="button is-dark">Close</button>
    </footer>
  </div>
</div> */}


<button id='limits' className="button2 button is-dark"><span className='spanLimits'>Limits</span></button>

      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>
      <button className="button2 button is-dark">EP</button>
      <button id='gray' className="button3 button is-dark">EP</button>



    </div>
  </section>
      </React.Fragment>
    );

  }
}

  export default EPPage;
