import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    constructor(props){
        super(props);

        this.state={
            showImage : false,
            hideImage:true
        }
    }
    handleShow = () => {
        this.setState({
            showImage : true
        })
    }
    handleClose = () => {
        this.setState({
            showImage : false
        })
    }


    render(){
    return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Show Modal
          </Button>
    
          <Modal show={this.state.showImage} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="modal-img" src={this.props.src} />
                <p>{this.props.description}</p>
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}

export default SelectedBeast;