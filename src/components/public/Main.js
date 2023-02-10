/* teclear rce*/

import React, { Component } from "react";
import Cards from "./Cards";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { cartas: [] };
  }

  //componentDidMount() {
  // RickandMortyService.getAllCharacters()
  //   .then((data) => this.setState({cartas: data.results}))
  //   .catch((error)=>console.log(error));
  //}

  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h3 className="fw-light">RICK AND MORTY CARDS</h3>
              <p>
                <p className="card-text">
                  {" "}
                  Inserción de personajes, y login para nuevos usuarios{" "}
                </p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <Cards />
        {/* <Cards  cartas={this.state.cartas}/> */}
      </main>
    );
  }
}
