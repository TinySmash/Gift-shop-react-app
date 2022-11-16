import './cart.css';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getCartProducts, updateCart} from '../../actions/productActions'

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

  componentDidUpdate(){
    this.props.updateCart(this.state.cartProducts);
  }

  
  render() {
    
    const {cartProducts} = this.state;
    let cartLength = cartProducts.length;
    let priceArray = [0];
    const totalPrice = cartProducts.forEach(e => {
      priceArray.push(e?.price)
    })
    const initialSum = priceArray.reduce((a, b) => Number(a) + Number(b));
    const sum = initialSum.toFixed(2).replace(/(\.0+|0+)$/, '')
    
    const removeFromCart = (element, product) => {
      element?.preventDefault();
      let productIndex = cartProducts.indexOf(product);
      let newCart = cartProducts.filter((e) => e !== product);
      console.log(newCart)
      this.setState({cartProducts : newCart});
      console.log('item deleted');
    }


    return(
      <div className="cart">
        <div className="cart-container-containerxd">
          {cartProducts.map((productToRender) => {
            return(
              <div className="cart-container">
                <img src={productToRender?.picture} alt="img" id='cart-img'/>
                <h1 className="cart-info">{productToRender?.name}</h1>
                <h1 className="cart-info">{productToRender?.price}$</h1>
                <button className="cart-action-btn" id='buy-cart-product'>Buy</button>
                <br />
                <button className="cart-action-btn" id='remove-from-cart' onClick={(element) => removeFromCart(element, productToRender)}>Remove</button>
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

export default connect(mapCartToProps, {getCartProducts, updateCart})(Cart);