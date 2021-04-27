  
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ''

class SelectedBeast extends React.Component {
  render () {
    return (
      // render SelectedBeast modal
      <div>
        <Modal
          show={this.props.display}
          onHide={this.props.hideBeast}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.selectedBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title}/>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideBeast} variant="primary">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
