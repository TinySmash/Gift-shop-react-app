import img1 from './images/product1.png';
import img2 from './images/product2.png';
import img3 from './images/product3.png';
import img4 from './images/product4.png';
import img5 from './images/product5.png';
import img6 from './images/product6.png';
import img7 from './images/product7.png';

const intialState = {
    products : [
        {
            id: 1,
            name: 'PS4 controller',
            picture : img1,
            price : 35
        },
        {
            id: 2,
            name: 'black keyboard',
            picture : img2,
            price : 20
        },
        {
            id: 3,
            name: 'W headphones',
            picture : img3,
            price : 25
        },
        {
            id: 4,
            name: 'Glasses',
            picture : img4,
            price : 12
        },
        {
            id: 5,
            name: 'Keychain',
            picture : img5,
            price : 2.99
        },
        {
            id: 6,
            name: 'Phone case',
            picture : img6,
            price : 6.99
        },
        {
            id: 7,
            name: 'Airpods',
            picture : img7,
            price : 39.99
        }
    ]
};

export default  function(state = intialState, action){
    switch(action.type){
        case 'GET_PRODUCT' :
            return {
                ...state,
                product : state.products.filter(e => e.id == action.payload)
            }
        default :
            return state;
    }
}