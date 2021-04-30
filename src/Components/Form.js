import React from 'react';
import {Container} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class FormComponent extends React.Component {

  handleForm = event => {
    const hornNumSelected = +event.target.value;
    const hornArr = this.props.originalData.filter(beast => beast.horns === hornNumSelected);
    this.props.filterBeast(hornArr);
  }

  render() {

    return (
      <>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Select number of beasts</Form.Label>
              <Form.Control as="select"
                onChange={this.handleForm}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}

export default FormComponent;
