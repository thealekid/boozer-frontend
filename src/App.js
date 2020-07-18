import React, { Component } from "react";
import "./App.css";
import CocktailsContainer from "./components/CocktailsContainer";
import InfoPanel from "./components/InfoPanel";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: null,
      cocktail: {},
    };
  }
  updateIdFromApp = (id) => {
    console.log("updating ID from App component");
    console.log("I have been passed this id from a cocktail", id);

    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          cocktail: data,
          selected: id,
        })
      );

    //   this.setState({
    //     selected: id
    //   })
  };

  render() {
    console.log("state from App", this.state);
    return (
      <div className="body">
        <CocktailsContainer updateId={this.updateIdFromApp} />
        <div className="main-`content">
          <InfoPanel cocktailinfo={this.state.cocktail} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
