import React from 'react'
import './botMenu.css';

export default function BotMenu() {
  return (
    <div className="bot-menu">
          <li className="bot-menu-item">
            <h2 className="bot-menu-header">Contact us</h2>
            <h4 className="bot-menu-option">islam.gueniari@gmail.com</h4>
            <h4 className="bot-menu-option">+212 682839818</h4>
            <h4 className="bot-menu-option">@tinys_smash_</h4>
          </li>
          <li className="bot-menu-item">
            <h2 className="bot-menu-header">Help</h2>
            <h4 className="bot-menu-option">+12 3456789</h4>
            <h4 className="bot-menu-option">giftshop@gmail.com</h4>
          </li>
          <li className="bot-menu-item">
            <h2 className="bot-menu-header">Feedback</h2>
            <h4 className="bot-menu-option">Submit a feedback</h4>
            <h4 className="bot-menu-option">Rate us</h4>
          </li>
        </div>
  )
}
