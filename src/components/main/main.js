import React, { Component } from 'react';
import './main.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/userActions';


function Main(props){

    const [ userState, setUserState ] = useState();
    const { checkUser } = props;
    
    

    
    
    useEffect(() => {
        checkUser();
        setUserState(props.user.user)
        
    },[])
    
    
    //setUserState(user);
    console.log(userState)

    return ( 
        <div>
            <h1 id='Title'>Your favorite<br></br>Gifts shop</h1>
            {userState?.isLoggedIn ? <h2 id='welcome-user'>Welcome {userState.userName}</h2> : 
            <a id="profile-area" href='/user-form'>
                <img src="user.png" alt="profile" id="profile-img" />
            </a>
            }
            <nav id='navbar'>
                <div id='menu-btn'>
                    <div id='menu-btn-burger'></div>
                </div>
                <ul>
                    <li className='menu' id='menu1'><a className='anchor-menu'>Home</a></li>
                    <li className='menu' id='menu2'><a className='anchor-menu'>About</a></li>
                    <li className='menu' id='menu3'><a className='anchor-menu'>Offers</a></li>
                </ul>
                <form>
                    <input />
                    <button id='search'>search</button>
                </form>
            </nav>
        </div>
    );

    
}


const mapUserStateToProps = (state) => {
    return{
        user : state?.myUser
    }
}



export default connect(mapUserStateToProps, {checkUser})(Main);
