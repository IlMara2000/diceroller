"use client";
import { useState } from 'react';
import Dice from '../components/Dice';

export default function Home() {
  const [diceValue, setDiceValue] = useState<number>(20);
  const [diceType, setDiceType] = useState<number>(20);
  const [isRolling, setIsRolling] = useState(false);

  const dadi = [4, 6, 8, 10, 12, 20, 100];

  const rollDice = (faces: number) => {
    setDiceType(faces);
    setIsRolling(true);
    
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * faces) + 1;
      setDiceValue(newValue);
      setIsRolling(false);
    }, 600);
  };

  return (
    <main style={{ 
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', minHeight: '100vh', gap: '30px', padding: '20px' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>D&D Dice Roller</h1>
        <p>Stai lanciando un <strong>d{diceType}</strong></p>
      </div>

      <Dice value={diceValue} isRolling={isRolling} />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '10px', 
        maxWidth: '400px' 
      }}>
        {dadi.map((f) => (
          <button 
            key={f}
            onClick={() => rollDice(f)}
            disabled={isRolling}
            style={{
              padding: '12px',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: diceType === f ? '#0070f3' : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              transition: '0.2s'
            }}
          >
            d{f}
          </button>
        ))}
      </div>
    </main>
  );
}
