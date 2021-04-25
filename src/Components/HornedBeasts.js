
import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div >
             
             <img src={this.props.img_url} alt={this.props.alt} title={this.props.title} />
             
            </div>
         );   
    }
}
export default HornedBeasts;