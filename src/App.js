import React, { useState } from 'react';
import './App.css';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
      <button className="pick-color-btn" style={{ backgroundColor: selectedColor }} onClick={handleButtonClick}>
        {selectedColor ? selectedColor : 'Pick a color'}
      </button>
      {showColors && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className={`color-item ${color === selectedColor ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

  return (
    <div className="app">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
