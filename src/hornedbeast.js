import React from "react";

import './App.css';
import Card from 'react-bootstrap/Card';
import SelectedBeast from "./bootstrapComp/SelectedBeast";

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        //Here is the creation of the state inside constructor 
        this.state ={
            clickCounter:0
        }
    }z
    //if we need to update the state we have to create method
    updateState = () =>{
        this.setState({clickCounter: this.state.clickCounter + 1})

    }

    render(){
        return(          
        <Card className="cards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.link} onClick={this.updateState}/>
                        <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.discripe}<br />
                <span>&#128151; {this.state.clickCounter}</span>
                </Card.Text>
                <SelectedBeast src={this.props.link} description={this.props.discripe} name={this.props.title}/>
            </Card.Body>
        </Card>
        
        )
    }
}

export default HornedBeast;