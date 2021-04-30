import React from 'react';
import Header from './Components/header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './Components/data.json';
import SelectedBeast from './Components/selectbeast';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      display: false,
      allBeast: data,
    };
  }

  handleSelectChange = (title) => {
    let beast = data.find(item => item.title === title);
    this.setState({
      selectedBeast: beast,
      display: !this.state.display,
    });
  };

  handleClose = () => {
    this.setState({display: !this.state.display});
  }

  //function to filter

filterBeast = (allBeast) => {
  this.setState({allBeast:allBeast});
}

render() {
  return (
    <div className="">
      <Header />
      <Main
        handleSelectChange={this.handleSelectChange}
        originalData={data}
        allBeast={this.state.allBeast}
        filterBeast={this.filterBeast}
      />
      <SelectedBeast
        beast={this.state.selectedBeast}
        display={this.state.display}
        handleClose={this.handleClose}
      />
      <Footer />

    </div>
  );
}
}

export default App;