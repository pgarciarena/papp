import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  return(

    <header className="header grid">
      <div className="container">
        
        <Link className= "header__logo" title="Patagonian App" to="/" alt="pApp">pApp</Link>

        <div className="header__hamburguer" 
          onClick={ () => {
            let hamburguer = document.querySelector('.header__hamburguer')
            hamburguer.classList.toggle('active');
          }} > 

          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="header__menu">
          <ul className="header__menu-items">
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

      </div>

    </header>
  
  )
}
export default Header;