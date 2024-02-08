import React, { useEffect, useState } from 'react'
import Card from './Card';
import './App.css';

function App() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [colorsList, setColorsList] = useState([]);
  const MAX_COLOR_COUNT = 100;
  const colorPaletteGenerator = () => {
    const colorsList = [];
    for (let i = 0; i < MAX_COLOR_COUNT; i++) {
      const val = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`
      colorsList.push(val);
    }
    setColorsList(colorsList);
  }
  useEffect(() => {
    colorPaletteGenerator();
  }, [])
  return (
    <div>
      <h2>React Color Palette Generator</h2>
      <div className='container'>
        {colorsList.map((colorHex, index) => (
          <li key={index} onClick={() => {
            navigator.clipboard.writeText(colorHex);
            setCopiedIndex(index);
          }}>
            <Card colorCode={colorHex} index={index} />
          </li>
        ))}
      </div>
    </div>
  )
}

export default App;
