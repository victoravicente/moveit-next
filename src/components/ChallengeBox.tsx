import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox(){
    const {activeChallenge, resetChallenge,completeChallenge} = useContext(ChallengesContext);
    const {stopCountdown} = useContext(CountdownContext)
    function handleChallengeSucceeded(){
        completeChallenge()
        stopCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        stopCountdown()
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desavio</strong>
                        <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button type="button" onClick={handleChallengeFailed} className={styles.challengeFailedButton}>
                                Falhei
                            </button>
                            <button type="button" onClick={handleChallengeSucceeded} className={styles.challengeSucceededButton}>
                                Consegui
                            </button>
                        </footer>
                </div>
            ):(
                <div className={styles.challengNotActive}>
                <strong>Finaliza um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
            </div>
            
    )
}