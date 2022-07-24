import React from "react";
import './App.css';

class HornedBeast extends React.Component{
    render(){
        return(
            <div className="beast-container">
                <h2 >
                    {this.props.title}
                </h2>
                <img className="animalImage" src={this.props.link} alt={this.props.alt} title={this.props.picTitle} />
                <p>
                    {this.props.discripe}
                </p>
            </div>
        )
    }
}

export default HornedBeast;