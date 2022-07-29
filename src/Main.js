import React from "react";
import HornedBeast from "./hornedbeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import './App.css';


class Main extends React.Component{

    fitlterData=(e)=>{
        this.props.filterBeastByHornNumber(e);
    }
    render(){
        return(<>
          
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="disabledSelect">Please Select the number of horn</Form.Label>
                        <Form.Select id="disabledSelect" onChange={this.fitlterData}>
                            <option value ="">all</option>
                            <option value ="1">1</option>
                            <option value ="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Select>
                    </Form.Group>
          
            <Row xs={1} md={3} className="g-4">
           { this.props.data && this.props.data.map( (item,idx) =>{
             return(<Col key={idx}>
                        <HornedBeast showModal={this.props.showModal} link={item.image_url} title={item.title} discripe={item.description} data={item} />
                 </Col>
                 )  
            })}
            </Row>
            </>  
        )
        
    }
}
export default Main; 