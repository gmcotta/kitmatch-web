import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, MenuButton } from './styles';
import logo from '../../assets/logo.svg';
import menuIcon from '../../assets/menu.svg';
import menuClose from '../../assets/menu-close.svg';

const Header: React.FC = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 425) {
      setMenuIsOpened(false);
    }
  }, []);

  function handleMenuToggle() {
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="KitMatch" />
      </Link>
      <Nav open={menuIsOpened}>
        <Link to="/about">SOBRE NÓS</Link>
        <Link to="/search">ENCONTRAR</Link>
        <Link to="/create">ANUNCIAR</Link>
        <Link to="/contact">CONTATO</Link>
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
