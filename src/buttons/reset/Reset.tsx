import "./reset.modal.css"
import StopIcon from "./stop-svgrepo-com.svg"

interface ResetProps {
    onClick: () => void;
  }

export default function Reset({ onClick }: ResetProps){
    return(
        <div className="reset" onClick={onClick}>
             <img src= {StopIcon} />
        </div>
    )
}