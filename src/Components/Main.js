import React from 'react';
import FormComponent from './Form';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    console.log('main', this.props);

    let beastArray = this.props.allBeast.map((beast, index) => {
      return <HornedBeasts
        key={index}
        image_url={beast.image_url}
        description={beast.descriptions}
        title={beast.title}
        handleSelectChange={this.props.handleSelectChange}
      />;

    });

    return (
      <>
        <FormComponent
          filterBeast={this.props.filterBeast}
          allBeast={this.props.allBeast}
          originalData={this.props.originalData}
        />
        <main>
          <CardColumns>
            {beastArray}
          </CardColumns>
        </main>
      </>
    );
  }
}

export default Main;
