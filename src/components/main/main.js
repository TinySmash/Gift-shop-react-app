import React, { Component } from 'react';
import './main.css';



function Main(props){




    return ( 
        <div>
            <h1 id='Title'>Your favorite<br></br>Gifts shop</h1>
        
            <nav id='navbar'>
                <div id='menu-btn'>
                    <div id='menu-btn-burger'></div>
                </div>
                <ul>
                    <li className='menu' id='menu1'><a className='anchor-menu'>Profile</a></li>
                    <li className='menu' id='menu2'><a className='anchor-menu'>Cart</a></li>
                    <li className='menu' id='menu3'><a className='anchor-menu'>Support</a></li>
                </ul>
                <form>
                    <input />
                    <button id='search'>search</button>
                </form>
            </nav>
        </div>
    );

    
}






export default Main;
