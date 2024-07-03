import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
`;

const NavLinks = styled.div`
  a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
  }
`;

const HomeButton = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <NavBar>
      <HomeButton to="/">E-Commerce</HomeButton>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
