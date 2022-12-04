// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Gacha from './components/Gacha';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Gacha />

      <div className="footer">
        <p>Create by <a href='https://github.com/imntps' target="_blank">4JIZEN</a></p>
      </div>
    </div>
  );
}

export default App;
