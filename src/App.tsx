// src/App.tsx
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>電卓アプリ</h1>
      <Calculator />
    </div>
  );
};

export default App;
