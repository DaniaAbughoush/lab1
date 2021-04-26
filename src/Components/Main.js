import React from 'react';
import HornedBeasts from './HornedBeasts'
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component{
    render(){
      let hornedBeast=data.map(animal=>{
        return <HornedBeasts title={animal.title} description={animal.description}  image_url = {animal.image_url} alt={animal.keyword}/>
      });
      
       


            
return(
  <div>
     <CardColumns>

    {hornedBeast}
     </CardColumns>
  </div>
)
    }
}
export default Main;
