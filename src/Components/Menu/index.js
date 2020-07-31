import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import { LogoImage, MenuWrapper } from './styles.js'
import Button from '../Button';

function Menu () {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage className="logo" src={logo} alt="Techflix logo"/>
      </Link>

     <Button as={Link} className='ButtonLink' to='/cadastro/video'>
       Novo vídeo
     </Button>
    </MenuWrapper>
  );
}

export default Menu;
