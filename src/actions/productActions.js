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