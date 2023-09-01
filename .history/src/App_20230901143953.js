import React from 'react';
import Navbar from './shared/Navbar';
import CatImages from './component/CatImages';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cats categories with images</h1>
      <Navbar />
      <CatImages />
    </div>
  );
}

export default App;
