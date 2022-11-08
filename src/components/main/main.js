import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <li className='menu' id='menu1'><Link className='anchor-menu'>Profile</Link></li>
                    <li className='menu' id='menu2'><Link className='anchor-menu'>Cart</Link></li>
                    <li className='menu' id='menu3'><Link className='anchor-menu'>Support</Link></li>
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
