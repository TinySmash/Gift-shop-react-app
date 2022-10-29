import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import usersReducer from './usersReducer';

const allReducers = combineReducers({
    myProduct : productsReducer,
    myUser : usersReducer
})

export default allReducers;