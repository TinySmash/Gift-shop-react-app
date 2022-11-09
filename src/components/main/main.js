import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';



function Main(){

    let menuOpened = false;

    const menuToggle = (element) => {
        element.preventDefault();
        let menuButton = document.querySelector('.menu-btn');
        if(!menuOpened){
            menuButton.classList.add('open');
        }else if(menuOpened){
            menuButton.classList.remove('open');
        }
        menuOpened = !menuOpened ;
    }

    const search = (e) => {
        e.preventDefault();
    }


    return ( 
        <div>
            <h1 id='Title'>Your favorite<br></br>Gifts shop</h1>
        
            <nav id='navbar'>
                <div className='menu-btn' onClick={menuToggle}>
                    <div className='menu-btn-burger'></div>
                </div>
                <ul>
                    <li className='menu' id='menu1'><Link className='anchor-menu'>Profile</Link></li>
                    <li className='menu' id='menu2'><Link className='anchor-menu'>Cart</Link></li>
                    <li className='menu' id='menu3'><Link className='anchor-menu'>Support</Link></li>
                </ul>
                <form id='mainForm'>
                    <input id='mainInput'/>
                    <button id='search' onClick={search}>search</button>
                </form>
            </nav>
        </div>
    );

    
}






export default Main;
