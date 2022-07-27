import React from "react";
import Form from 'react-bootstrap/Form';

class UserInput extends React.Component {
    constructor(props){
        super(props);

        this.state={
            select: ''
        }
    }

    handleSelect = (e) => {
        this.setState({
            
        })

    }
    render() {
        return (
            <>
                <Form >
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="disabledSelect">Please Select the number of horn</Form.Label>
                        <Form.Select id="disabledSelect" onChange={this.handleSelect}>
                            <option value ="1">1</option>
                            <option value ="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </>
        )
    }


}

export default UserInput;