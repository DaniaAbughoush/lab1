
import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(

            <div >
             <h2>{this.props.subject}</h2>
             <img  width='300px' src={this.props.img_url} alt={this.props.alt} title={this.props.title} />
             <p>{this.props.descreption}</p>
            </div>
         );   
    }
}
export default HornedBeasts;