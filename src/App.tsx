import { useState } from 'react';
import { Timer } from './timer';
import { Start } from './buttons/start';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleStart = () => {
    
    const mins = parseInt(minutes) || 0;
    const secs = parseInt(seconds) || 0;
    
    
    if (mins < 0 || secs < 0 || secs >= 60) {
      alert('Please enter valid time');
      return;
    }
    
    
    console.log(`Starting timer with ${mins} minutes and ${secs} seconds`);
    
  };

  return (
    <>
      <Timer 
        minutes={minutes}
        seconds={seconds}
        onMinutesChange={setMinutes}
        onSecondsChange={setSeconds}
      />
      <div className='buttons'>
        <Start onClick={handleStart} />
      </div>
    </>
  )
}

export default App