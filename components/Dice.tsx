export default function Dice({ value, isRolling }: { value: number; isRolling: boolean }) {
  return (
    <div style={{
      width: '100px',
      height: '100px',
      border: '4px solid #333',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      fontWeight: 'bold',
      transition: 'transform 0.1s',
      transform: isRolling ? 'rotate(20deg) scale(1.1)' : 'rotate(0deg)',
      backgroundColor: 'white'
    }}>
      {value}
    </div>
  );
}
