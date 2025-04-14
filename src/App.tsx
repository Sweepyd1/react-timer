// App.tsx
import { useState, useEffect } from 'react';
import { Timer } from './timer';
import { Start } from './buttons/start';
import { Reset } from './buttons/reset';
import Swal from 'sweetalert2'

import './App.css';

function App() {

  const custom_alert = (icon: string, message: string) => {
    Swal.fire({
      title: message,
      icon: icon,
      draggable: true
    });
  } 

  const [minutes, setMinutes] = useState(() => {
    return localStorage.getItem('minutes');
  });
  const [seconds, setSeconds] = useState(() => {
    return localStorage.getItem('seconds');
  });

  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(() => {
    const savedTotal = localStorage.getItem('totalSeconds');
    const savedIsRunning = localStorage.getItem('isRunning');
    
    if (savedIsRunning === 'true')
      setIsRunning(true)
    else{
      setIsRunning(false)
    }
    
    if (savedTotal && savedIsRunning === 'true') {
      const timePassed = Math.floor((Date.now() - Number(localStorage.getItem('startTime'))) / 1000);
      return Math.max(0, Math.floor(Number(savedTotal) - timePassed));
    }
    return savedTotal ? Number(savedTotal) : 0;
  });

  useEffect(() => {
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('totalSeconds', totalSeconds.toString());
    localStorage.setItem('isRunning', isRunning.toString());
    
    if (isRunning) {
      localStorage.setItem('startTime', Date.now().toString());
    } else {
      localStorage.removeItem('startTime');
    }
  }, [minutes, seconds, totalSeconds, isRunning]);

  useEffect(() => {
    let interval: number;
    
    if (isRunning && totalSeconds > 0) {
      interval = window.setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            custom_alert("success", "success");
        
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    setMinutes(mins.toString());
    setSeconds(secs.toString().padStart(2, '0'));
  }, [totalSeconds]);

  const handleStart = () => {
    if (!isRunning) {
      const mins = parseInt(minutes) || 0;
      const secs = parseInt(seconds) || 0;
      const total = mins * 60 + secs;
      
      if (total <= 0) {
        custom_alert("error", "Введите корректное время");
        return;
      }
      
      setTotalSeconds(total);
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const resetTimer = ()  => {
    setIsRunning(false);
    setMinutes("");
    setSeconds("")
    return;
    
  }

  return (
    <>
      <Timer 
        minutes={minutes}
        seconds={seconds}
        onMinutesChange={setMinutes}
        onSecondsChange={setSeconds}
        isRunning={isRunning}
      />
      <div className='buttons'>
        <Start isRunning={isRunning} onClick={handleStart} />
        <Reset onClick={resetTimer} />
      </div>
    </>
  );
}

export default App;