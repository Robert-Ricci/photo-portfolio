import './App.css';
import React, { useState } from 'react';
import Main from './components/Main';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

import { Navbar, Nav} from 'react-bootstrap';
import Router from './components/Router';

function App() {

 

  const[selectedImg, setSelectedImg] = useState(null)
  
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Robert Ricci's Photo Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/imagegrid">Portfolio</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
  </Navbar.Collapse>
</Navbar>
      <Router />
      <Main />
      <Upload />
      {/* <ImageGrid setSelectedImg = {setSelectedImg} /> */}
      {selectedImg && 
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
     
    </div>
  );
}

export default App;
