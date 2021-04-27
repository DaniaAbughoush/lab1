
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { CardImg } from 'react-bootstrap';

class HornedBeasts extends React.Component{
  constructor(props){
    super(props);

    this.state={
      numbberOfFav:0
    };
  }
    countFavor=()=>{
      this.setState(
        {

          numbberOfFav:this.state.numbberOfFav+1
        }
      );
    }
    render(){
      return(

        <div >

          <Card style={{ width: '18rem' }}>
            <Card.Img onClick={this.countFavor} variant="top" src={this.props.image_url} style={{ width: '100%' }}/>
            <Card.Body>
              <Card.Title>
                {this.props.title}
              </Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Text >
                {this.props.keyword}
              </Card.Text>
              <Card.Text>
                        💟 {this.state.numbberOfFav} click on hornBeast!
              </Card.Text>
            </Card.Body>

          </Card>

        </div>
      );
    }
}
export default HornedBeasts;
