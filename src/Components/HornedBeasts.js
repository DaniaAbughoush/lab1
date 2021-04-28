import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfClicks: 0,
      numberOfStars: '💟',
    };
  };

  handleClick = () => {
    this.props.handleSelectChange(this.props.title);
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    return (

      <Card>
        <Card.Img onClick={this.handleClick} variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
            <p>
              {this.state.numberOfClicks}
              {this.state.numberOfStars}
            </p>

          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
}
export default HornedBeasts;
