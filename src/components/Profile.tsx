import { useContext } from 'react'
import {ChallengesContext} from '../contexts/ChallengesContext'
import style from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext);
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/victoravicente.png" alt="Victor Vicente"/>
            <div>
                <strong>Victor Vicente</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}