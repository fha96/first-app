import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
    return (
        <>
          {/* <Button variant="primary" onClick={this.handleShow}>
            Show Modal
          </Button>
     */}
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.beastS.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="modal-img" src={this.props.beastS.image_url} />
                <p>{this.props.beastS.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}

export default SelectedBeast;