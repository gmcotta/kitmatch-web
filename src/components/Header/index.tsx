import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, MenuButton } from './styles';
import logo from '../../assets/logo.svg';
import menuIcon from '../../assets/menu.svg';
import menuClose from '../../assets/menu-close.svg';

const Header: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const url = document.URL;

  function handleMenuToggle() {
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="KitMatch" />
      </Link>
      <Nav open={menuIsOpened}>
        <Link className={url.includes('/about') ? 'selected' : ''} to="/about">
          SOBRE NÓS
        </Link>
        <Link
          className={url.includes('/search') ? 'selected' : ''}
          to="/search"
        >
          ENCONTRAR
        </Link>
        <Link
          className={url.includes('/create') ? 'selected' : ''}
          to="/create"
        >
          ANUNCIAR
        </Link>
        <Link
          className={url.includes('/contact') ? 'selected' : ''}
          to="/contact"
        >
          CONTATO
        </Link>
        <Link className={url.includes('/login') ? 'selected' : ''} to="/login">
          ENTRAR
        </Link>
      </Nav>
      <MenuButton type="button" onClick={handleMenuToggle}>
        {menuIsOpened ? (
          <img src={menuClose} alt="Close menu" />
        ) : (
          <img src={menuIcon} alt="Menu icon" />
        )}
      </MenuButton>
    </Container>
  );
};

export default Header;
