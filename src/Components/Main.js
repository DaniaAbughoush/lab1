import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component{
  render(){
    let hornedBeast = this.props.data.map((beast, index) => {
      return <HornedBeasts
        key={index}
        image_url={beast.image_url}
        description={beast.description}
        title={beast.title}
        handleSelectChange={this.props.handleSelectChange}
      />;

    });





    return(
      <div>
        <CardColumns>

          {hornedBeast}
        </CardColumns>
      </div>
    );
  }
}
export default Main;
