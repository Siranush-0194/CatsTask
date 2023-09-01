import React from 'react';
import Navbar from './shared/Navbar';
import CatImages from './component/CatImages';
import '../src/styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Cat`s categories with images</h1>
      <Navbar />
      <CatImages />
    </div>
  );
}

export default App;
