import {Children, createContext, ReactNode, useContext, useEffect, useState} from "react"
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    active: boolean,
    startCountdown: () => void,
    stopCountdown: () => void, 
}


interface CountdownProviderProps{
    children: ReactNode;
}
let countDownTimeOut : NodeJS.Timeout;

export const  CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children} : CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60 ;

    function startCountdown(){
        setActive(true)
    }
    function stopCountdown(){ 
        clearTimeout(countDownTimeOut);
        setActive(false);
        setHasFinished(false);
        setTime(25 * 60);
    }
    useEffect(()=>{
        if(active && time > 0){
            countDownTimeOut = setTimeout(()=>{
                setTime(time - 1) 
            }, 1000)
        }else if (active && time === 0){
            setHasFinished(true);
            setActive(false);
            startNewChallenge();

        }
    },[active,time])

    
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            active,
            startCountdown,
            stopCountdown, 
        }}>
            {children}
        </CountdownContext.Provider>
            )
}