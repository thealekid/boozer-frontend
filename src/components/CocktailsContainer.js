import React, {Component } from 'react';
import Cocktail from './Cocktail'

export default class CocktailsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cocktails : []
        }

    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/cocktails")
        .then(response => response.json())
        .then(data =>            
            this.setState({
                cocktails : data,
            })
        )
    }

    render () {
        console.log("render")
        let cocktails = this.state.cocktails.map(cocktail => <Cocktail id={cocktail.id} key={cocktail.id} name={cocktail.name} handleIdChange={this.props.updateId}/>)

        return (
            <div className="cocktailList">
            
            {cocktails}
            </div>
        )
    }
}