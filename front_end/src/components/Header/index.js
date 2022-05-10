import React from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/Logo/logo.png';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const renderLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <a href={`/about`}><span className="nav-link">About</span></a>
        </li>
        <li className="nav-item">
          <a href="#menu"><span className="nav-link">Menu</span></a>
        </li>
        <li className="nav-item">
          <a href="#order"><span className="nav-link order">Order Now</span></a>
        </li>
      </Nav>
    );
  }

  return (
    <>
      <Navbar className="nav-color" collapseOnSelect fixed="top" expand="lg" variant="dark" style={{ zIndex: 20 }}>
        <Container fluid>
          <Link to="/" className="navbar-brand"><img src={logo} alt="nothing" /><span>Gurkha Spice Winchester</span></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
             {renderLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}

export default Header