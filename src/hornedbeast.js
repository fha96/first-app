import React from "react";
import './App.css';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        //Here is the creation of the state inside constructor 
        this.state ={
            clickCounter:0
        }
    }
    //if we need to update the state we have to create method
    updateState = () =>{
        this.setState({clickCounter: this.state.clickCounter + 1})

    }

    render(){
        return(
            <div className="beast-container">
                <h2 >
                    {this.props.title}
                </h2>
                <img className="animalImage" src={this.props.link} alt={this.props.alt} title={this.props.picTitle} onClick={this.updateState}/>
                <span>&#128151; {this.state.clickCounter}</span> 
                <p>
                    {this.props.discripe}
                </p>
            </div>
        )
    }
}

export default HornedBeast;