import './App.css';
import React, { useState } from 'react';
import Main from './components/Main';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {

  const[selectedImg, setSelectedImg] = useState(null)
  
  return (
    <div className="App">
      <Main />
      <Upload />
      <ImageGrid setSelectedImg = {setSelectedImg} />
      {selectedImg && 
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
