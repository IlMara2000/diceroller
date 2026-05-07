"use client";
import { useState } from 'react';
import Dice from '../components/Dice';

export default function Home() {
  const [diceValue, setDiceValue] = useState<number>(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    // Animazione fake di 500ms
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      setIsRolling(false);
    }, 500);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lancia il Dado</h1>
      <Dice value={diceValue} isRolling={isRolling} />
      <button 
        onClick={rollDice}
        disabled={isRolling}
        style={{
          padding: '10px 20px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {isRolling ? 'Lancio in corso...' : 'Lancia!'}
      </button>
    </main>
  );
}
