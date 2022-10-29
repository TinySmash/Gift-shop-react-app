import rootReducer from './reducers'
import { createStore } from "redux"; 




const intialState = {};
const store = createStore(
    rootReducer,
    intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


export default store;