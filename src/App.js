import React, { useState } from 'react';
import "./index.css"

import { Navbar, Nav} from 'react-bootstrap';
import Router from './components/Router';

// const navbar = {backgroundColor: '#D88A83'}
function App() {

  
  return (
    <div className="App">
      <Navbar className="navbar" collapseOnSelect expand="lg"  variant="dark" fixed="top"  >
                <Navbar.Brand >Robert Ricci's Photo Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="mailto:rmricci121@gmail.com?subject=Photo Portfolio Contact" >Contact</Nav.Link>
                </Nav>
  </Navbar.Collapse>
</Navbar>
      <Router />
     
    </div>
  );
}

export default App;
