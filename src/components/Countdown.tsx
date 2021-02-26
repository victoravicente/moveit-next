
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/Countdown.module.css'


export function Countdown(){
    
    const {
        minutes,
        seconds, 
        hasFinished, 
        active,
        startCountdown,
        stopCountdown
    } = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    
    return(
    <div>
        <div className={style.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {hasFinished ? (
            <button disabled type="button" className={style.countdownButton}>Ciclo Encerrado</button>
        ) : (
            <>
            {active ?
            (<button type="button" onClick={stopCountdown} className={`${style.countdownButton} ${style.countdownButtonActive}`}>
            Abandonar Ciclo
            </button>)
            :
            (<button type="button" onClick={startCountdown} className={style.countdownButton}>
            Iniciar Ciclo
            </button>)
            }
            </>
        )}
            
    </div>
    )
}
