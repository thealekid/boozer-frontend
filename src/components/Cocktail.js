import React, {Component} from 'react'

export default class Cocktail extends Component {

    handleClick = () => {
        console.log("Click me!", this.props.id)
        console.log("Name is", this.props.name)
        let cocktailId = this.props.id
        this.props.handleIdChange(cocktailId)
    }
  
    render (){
        
        return (
            <div className="cocktail-item" onClick={this.handleClick} >

             {this.props.name}   
            </div>
        )
    }
}

// this.handleClick referring to the handleClick function created above.