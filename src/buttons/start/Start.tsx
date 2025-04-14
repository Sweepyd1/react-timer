import './start.modal.css'
import PlayIcon from './play.svg'
import { useState } from 'react'
import PauseIcon from './pause.svg'

interface StartProps {
    onClick: () => void;
  }

export default function Start({onClick}:StartProps){

    const [isPlaying, setIsPlaying] = useState(false)

    const handleIconClick = () => {
        setIsPlaying(!isPlaying);
        onClick();
        
    }

    return(
        <div className="start">
        <img
            src={isPlaying ? PauseIcon : PlayIcon}
            alt="Иконка воспроизведения/паузы"
            onClick={handleIconClick}
        />
    </div>
    )
}