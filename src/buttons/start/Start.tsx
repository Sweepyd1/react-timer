// Start.tsx
import './start.modal.css';
import PlayIcon from './play.svg';
import PauseIcon from './pause.svg';

interface StartProps {
  onClick: () => void;
  isRunning: boolean;
}

export default function Start({ onClick, isRunning }: StartProps) {
  return (
    <div className="start"  onClick={onClick}>
      <img
        src={isRunning ? PauseIcon : PlayIcon}
        alt={isRunning ? "Пауза" : "Старт"}
       
      />
    </div>
  );
}