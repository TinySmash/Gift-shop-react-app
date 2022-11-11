export const getProducts = () => {
    return{
        type : 'GET_PRODUCTS',
        payload : null
    }
}

export const getProduct = (id) => {

    return{
        type : 'GET_PRODUCT',
        payload : id
    }

}

export const getProductToCart = (product) => {
    return{
        type : 'GET_PRODUCT_TO_CART',
        payload : product
    }
}

export const getCartProducts = () => {
    return {
        type : 'GET_CART_PRODUCTS',
        payload : null
    }
}