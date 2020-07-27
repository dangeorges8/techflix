import React from 'react';
import logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../components/Button';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/">
      <img className="logo" src={logo} alt="Techflix logo"/>
      </a>

     <Button as='a' className='ButtonLink' href='/'>
       Novo vídeo
     </Button>
    </nav>
  );
}

export default Menu;