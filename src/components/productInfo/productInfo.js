import './productInfo.css';
import { useParams } from 'react-router-dom';
import { getProduct, getProductToCart } from '../../actions/productActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const ProductInfo = ({ getProduct, getProductToCart, products }) => {
    const { id } = useParams();
    const navigate = useNavigate();      
    useEffect(() => {
      getProduct(id);
    }, [id, getProduct]);
  
    useEffect(() => {
      console.log(products?.[0]); // <-- log in effect
    }, [products]);

    const addToCart = (e) => {
      e.preventDefault();
      getProductToCart(currentProduct);
      navigate("/")
    }

    const currentProduct = products?.[0];
    console.log(currentProduct?.id)
  
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
            <button className='actionButton' onClick={addToCart}>Add to cart</button>
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
  
  export default connect(mapStateToProps, { getProduct, getProductToCart })(ProductInfo);
  