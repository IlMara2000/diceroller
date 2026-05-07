export default function Dice({ value, isRolling }: { value: number; isRolling: boolean }) {
  return (
    <div className={`dice-container ${isRolling ? 'rolling' : ''}`} style={{
      width: '120px',
      height: '120px',
      border: '4px solid #333',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: value > 99 ? '2.2rem' : '3.5rem',
      fontWeight: 'bold',
      backgroundColor: 'white',
      position: 'relative',
      boxShadow: '0 10px 0 #bbb'
    }}>
      {value}
    </div>
  );
}
