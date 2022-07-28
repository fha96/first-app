import React from "react";
import HornedBeast from "./hornedbeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';


class Main extends React.Component{
    render(){
        return(
            <Row xs={1} md={3} className="g-4">
           { this.props.data && this.props.data.map( (item,idx) =>{
             return(<Col key={idx}>
                        <HornedBeast showModal={this.props.showModal} link={item.image_url} title={item.title} discripe={item.description} data={item} />
                 </Col>
                 )  
            })}
            </Row>  
        )
        
    }
}
export default Main; 