import React, { Component } from 'react';
import Card from '../card/card';
import './items.css';
import { getProducts } from '../../actions/productActions';
import { connect } from 'react-redux';






class Items extends Component {

    

    componentDidMount(){
        this.props.getProducts()
    }

    
    render() { 
        
        
        const { products } = this.props;

        
        return (
            <ul id='mainShop'>

                {products.map(e => {
                    
                    return (
                        <a href={'/product-info/'+e.id}>
                            <Card 
                            key={e.id} 
                            productPic={e.picture}
                            price={e.price}
                            name={e.name}
                            />
                        </a>
                    )
                })}

            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        products : state.myProduct.products
    }
}
 
export default connect( mapStateToProps, {getProducts}  )(Items);