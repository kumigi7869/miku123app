// src/components/Calculator.tsx
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        {buttons.map(button => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

