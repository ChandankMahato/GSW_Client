import React, { useEffect } from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
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
          <HashLink smooth to="#about"><span className="nav-link">About</span></HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="#contact_head"><span className="nav-link">Contact Us</span></HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="#Reservation_head"><span className="nav-link">Reservation</span></HashLink>
        </li>
        <li className="nav-item">
          <a href="/menu" className="nav-link">Menu</a>
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