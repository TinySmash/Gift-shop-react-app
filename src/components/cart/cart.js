import './cart.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getCartProducts} from '../../actions/productActions'

class Cart extends Component {

  state = {

  }

  componentDidMount(){
    this.props.getCartProducts();
  }

  
  render() {
    
    console.log(this.props);
    


    return (
      <div>
        
      </div>
    )
  }
}

const mapCartToProps = (state) => ({
  cartProducts : state?.myProduct?.cartProducts
});

export default connect(mapCartToProps, {getCartProducts})(Cart);