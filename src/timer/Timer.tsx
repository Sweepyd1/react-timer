import './timer.modal.css';

interface TimerProps {
  minutes: string;
  seconds: string;
  onMinutesChange: (value: string) => void;
  onSecondsChange: (value: string) => void;
  isRunning: boolean;
}

export default function Timer({
  minutes,
  seconds,
  onMinutesChange,
  onSecondsChange,
  isRunning
}: TimerProps) {
  return (
    <div className="timer">
      <div className="timer-inputs">
        <div className="input-wrapper">
          <input 
            type="number" 
            placeholder="00" 
            className="time-input minutes" 
            min="0"
            value={minutes}
            onChange={(e) => onMinutesChange(e.target.value)}
            disabled={isRunning}
          />
          <label className="input-label">Minutes</label>
        </div>
        <span className="time-separator">:</span>
        <div className="input-wrapper">
          <input 
            type="number" 
            placeholder="00" 
            className="time-input seconds" 
            min="0" 
            max="59"
            value={seconds}
            onChange={(e) => onSecondsChange(e.target.value)}
            disabled={isRunning}
          />
          <label className="input-label">Seconds</label>
        </div>
      </div>
    </div>
  );
}