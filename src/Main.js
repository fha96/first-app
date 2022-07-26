import React from "react";
import HornedBeast from "./hornedbeast";
import Data from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import { Card } from "react-bootstrap";

class Main extends React.Component{
    render(){
        return(
            <Row xs={1} md={3} className="g-4">
           { Data.map( data =>{
             return(    <Col>
                        <HornedBeast link={data.image_url} title={data.title} discripe={data.description}/>
                 </Col>
                 )  
            })}
            </Row>
        )
        
    }
}
export default Main; 