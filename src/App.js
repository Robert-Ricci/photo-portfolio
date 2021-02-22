import React, { useState } from 'react';
import "./index.css"

import { Navbar, Nav} from 'react-bootstrap';
import Router from './components/Router';
// import ImageGrid from './components/ImageGrid';
// import Modal from './components/Modal';

const navbar = {backgroundColor: '#D88A83'}

function App() {
  
  // const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <div className="App">
      <Navbar className="navbar" collapseOnSelect expand="lg"  variant="dark" fixed="top" style={navbar} >
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
      {/* <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
     
    </div>
  );
}

export default App;
