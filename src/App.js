import React from 'react';
import Header from './Components/header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import data from './Components/data.json';
import SelectedBeast from './Components/SelectedBeast ';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      SelectedBeast:{},
      display:false,
      data:data,

    };
  }

  showModal = (selectedBeast) => {
    // this.setState({ display: !this.state.display });
    this.setState({ display: true, selectedBeast: selectedBeast });
  }
  
  hideModal = () => {
    this.setState({ display: false, selectedBeast: {} });
  }

  render(){
    return(
      <div>
        <Header/>
        <Main
          data={this.state.data}
          // showModal={this.showModal}
          // updateBeast={this.updateBeast}
          handleClick={this.showModal}
        />  
        <SelectedBeast
          display={this.state.display}
          hideBeast={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
