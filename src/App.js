import './App.css';
import Main from './components/main/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Items from './components/items/items';
import ProductInfo from './components/productInfo/productInfo';
import UserInterface from './components/userInterface/userInterface';
import Profile from './components/profile/profile';
import Cart from './components/cart/cart';
import UserProfile from './components/userProfile/userProfile';



function App() {

  
  return (
    <Provider store={store}>
      <Router className="App">


        <Routes>
          <Route exact path='/' element={
            <div id='Homepage'>
              <Profile />
              <Main />
              <Items/>
            </div>
          }></Route>
          <Route exact path='/product-info/:id' element={<ProductInfo/>}></Route>
          <Route exact path='/user-form' element={<UserInterface/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/user-profile' element={<UserProfile/>}></Route>
        </Routes>
        
      </Router>
    </Provider>
  );
}




export default App;
