import React, { Component } from 'react';


class Card extends Component {
    state = {  } 
    render() { 
        const {productPic, name, price} = this.props;
        return (
            <div id="card">
                <img id='img-container' src={productPic}></img>
                
                <h4 id='details'>{name} - {price}$</h4>
            </div>
        );
    }
}
 
export default Card;