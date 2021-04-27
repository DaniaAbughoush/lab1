import React from 'react';
import Header from './Components/header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import data from './Components/data.json';
import SelectedBeast from './Components/selectbeast';
// import { Container } from 'react-bootstrap';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedBeast:{},
      display:false,
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

  render(){

    return(
      <di>
        <Header/>
        < Main handleSelectChange={this.handleSelectChange} data={data} />
        <SelectedBeast
          beast={this.state.selectedBeast}
          display={this.state.display}
          handleClose={this.handleClose}
        />
        <Footer/>
      </di>
    );
  }
}
export default App;
