import React, { Component } from "react";
import { Button, Form as CocktailForm } from 'semantic-ui-react';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      instructions: "",
      source: "",
      proportions: [ 
        {
            ingredient_name: "",
            quantity: 0
        } 
      ],
    };
  }

  handleChange = (event) => {
    // console.log("Handle Change typing");
    console.log(event.target.name);
    let fieldName = event.target.name;
    let value = event.target.value;
    this.setState({ [fieldName]: value });
  };

  handleSubmit = (event) => {
    
    event.preventDefault();
    // change this to create API URL
    fetch("http://localhost:3000/api/v1/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
          console.log("Success:", data);
        }).catch(e => console.error(e));
    };

    
  handleAddIngredients = (event) => {
      event.preventDefault();
      console.log("Add click")
      let ingredientPortions = this.state.proportions
      
      ingredientPortions.push({ingredient_name: "", quantity: 0})
      console.log(ingredientPortions)
      this.setState({
          proportions: ingredientPortions
      })

    }

  handleIngredientChange = (event, index) => {
    // console.log(event.target.value)
    // console.log(index)
    let targetName = event.target.name
    let targetValue = event.target.value
    // adding the name and value retrieved into variables
    let propChange = [...this.state.proportions]
    let propFromArrayToEdit = propChange[index]
    // copy from array and it to the index
    // get the object from index
    // console.log(propFromArrayToEdit)
    // console.log(event.target.name)
    propFromArrayToEdit[targetName] = targetValue
    // update the object to new name - propFromArrayToEdit
    propChange[index] = propFromArrayToEdit
    // at this index in the copied Array, assign the new edited object
    this.setState({
      proportions: propChange
    })



    
  }

    
    render() {
        console.log(this.state);
        let proportions = this.state.proportions.map((proportion, index) => <div className="proportions" key={index} index={index}>
        <label>Ingredient Name</label>
        <input type="text" name="ingredient_name" value={proportion.ingredient_name} onChange={(e) => this.handleIngredientChange(e, index)}/>
        <label>Quantity</label>
        <input type="text" name="quantity" value={proportion.quantity} onChange={(e) => this.handleIngredientChange(e, index)}/>
        </div>)
    return (
        <div className="cocktail-form">
      <CocktailForm onSubmit={this.handleSubmit}>
        <h2>Create a Cocktail</h2>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label>Instructions</label>
        <input
          type="text"
          name="instructions"
          value={this.state.instructions}
          onChange={this.handleChange}
        />

        <label>Source</label>
        <input
            type="text"
            name="source"
            value={this.state.source}
            onChange={this.handleChange}
            />
        <h2>Proportions</h2>
            {proportions}

        <Button color='red' onClick={this.handleAddIngredients} >+</Button>
        <Button color='red' type="submit">add Cocktail</Button>


      </CocktailForm>
            </div>
    );
  }
}
