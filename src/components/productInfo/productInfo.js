import './productInfo.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../actions/productActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';


const ProductInfo = ({ getProduct, products }) => {
    const { id } = useParams();
      
    useEffect(() => {
      getProduct(id);
    }, [id, getProduct]);
  
    useEffect(() => {
      console.log(products?.[0]); // <-- log in effect
    }, [products]);

    const currentProduct = products?.[0];
  
    return ( 
      <div id='current'>
        <div id='current-container'>
            <img src={currentProduct?.picture} id='descriptionImg'></img>
        </div>
        <ul id='preferences'>
            <li><h3 id='product-name'>{currentProduct?.name}</h3></li>
            <li><h3 id='price'>{currentProduct?.price}$</h3></li>
        </ul>
        <div id='actionButtons'>
            <button className='actionButton'>Buy</button>
            <button className='actionButton'>Add to cart</button>
        </div>
        <div id="description-container">
          <p id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus sed itaque aliquam quisquam voluptates quibusdam deleniti nesciunt doloribus. Consectetur officia excepturi ab voluptate quam totam eveniet aliquam ratione veritatis iusto!</p>
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    products: state.myProduct.product || [], // <-- provide fallback
  });
  
  export default connect(mapStateToProps, { getProduct })(ProductInfo);
  