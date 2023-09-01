// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import CatImages from './components/CatImages';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cat Image Viewer</h1>
      <Navbar />
      <CatImages />
    </div>
  );
}

export default App;
