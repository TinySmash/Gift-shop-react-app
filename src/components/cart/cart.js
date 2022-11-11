import './cart.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getCartProducts} from '../../actions/productActions'

class Cart extends Component {

  state = {
    cartProducts : [

    ]
  }

  componentDidMount(){
    this.props.getCartProducts();
    this.setState({
      cartProducts : this.props.cartProducts
    })
  }

  
  render() {
    
    const {cartProducts} = this.state;
    let cartLength = cartProducts.length;
    console.log(this.state);
    let priceArray = [0];
    const totalPrice = cartProducts.forEach(e => {
      priceArray.push(e?.price)
    })
    const initialSum = priceArray.reduce((a, b) => Number(a) + Number(b));
    const sum = initialSum.toFixed(2).replace(/(\.0+|0+)$/, '')
    console.log(sum)
    


    return(
      <div className="cart">
        <div className="cart-container-containerxd">
          {cartProducts.map((e) => {
            return(
              <div className="cart-container">
                <img src={e?.picture} alt="img" id='cart-img'/>
                <h1 className="cart-info">{e?.name}</h1>
                <h1 className="cart-info">{e?.price}$</h1>
              </div>
            )
          })}
        </div>
        <div className='cart-nav'>
          <h1 className="total-price" >Total Price : {sum}$</h1>
          <button className='buy-cart'>Buy Cart</button>
        </div>
      </div>
    )
  }
}

const mapCartToProps = (state) => ({
  cartProducts : state?.myProduct?.cartProducts
});

export default connect(mapCartToProps, {getCartProducts})(Cart);