import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButtoon from '../Buttons/Login'
import { CSSTransition } from 'react-transition-group';
import './Navbar.css';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" style={{ backgroundColor: 'transparent' }}>
    <Container>
      <Navbar.Brand href="#home"><h4 className='webname'>Olcademy
      </h4></Navbar.Brand>
      {isMobile ? (
        <>
          <Button className="menu-icon" variant="outline-dark" onClick={handleShow}>
            <GiHamburgerMenu/>
          </Button>
          <CSSTransition in={show} timeout={300} classNames="fade-scale" unmountOnExit>
            <Navbar.Offcanvas style={{ background: "white", width: "250px" }}
              aria-labelledby="offcanvasNavbarLabel" placement="end"
              show={show} onHide={handleClose}
            >
              <Offcanvas.Header closeButton style={{ background: '#f0d43a' }}>
                <Offcanvas.Title id="offcanvasNavbarLabel"><h4 className='webname'>Medha</h4></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLinks style={{ padding: '10px 0px' }} />
                </Nav>
              </Offcanvas.Body> 
            </Navbar.Offcanvas>
          </CSSTransition>
        </>
      ) : (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"><NavLinks style={{ padding: '0px 20px' }}/></Nav>
        </Navbar.Collapse>
      )}
    </Container>
  </Navbar>
  );
};

export default CustomNavbar;

const NavLinks = ({ ...rest }) => {
  const navLinks = [
    { id: '#home', title: 'Home' },
    { id: '#about', title: 'About' },
    { id: '#events', title: 'Events' },
    { id: '#management', title: 'Management' },
    { id: '#gallery', title: 'Gallery' },
  ];

  return (
    <Nav className='display'>
      {navLinks.map((item, index) => (
        <Nav.Link key={index} href={item.id} {...rest} className='navitem'>{item.title}</Nav.Link>
      ))}
        <LoginButtoon/>
    </Nav>
  );
};
