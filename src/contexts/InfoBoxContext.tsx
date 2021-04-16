import { createContext, ReactNode, useState} from "react"
import {InfoBox} from "../components/InfoBox/InfoBox"


interface InfoBoxContextData {
    isInfoBoxOpen: boolean;
    openInfoBox: () => void;
    closeInfoBox: () => void;

}

interface InfoBoxProviderProps{
    children: ReactNode;
}


export const InfoBoxContext = createContext({} as InfoBoxContextData)


export function InfoBoxProvider ({children}: InfoBoxProviderProps){

  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);

  function openInfoBox(){
    setIsInfoBoxOpen(true);
    console.log('to clicando')
    
  }

  function closeInfoBox(){
    setIsInfoBoxOpen(false);
  }


  
    // const{startNewChallenge} = useContext(ChallengesContext);

    // const [time, setTime] = useState(0.05*60);
    // const [isActive, setIsActive] = useState(false);
    // const [hasFinished, setHasFinished] = useState(false);


    // const minutes = Math.floor(time/60);
    // const seconds = time%60;

    // function startCountdown(){
    //     setIsActive(true);
    // }

    // function resetCountdown(){
    //     clearTimeout(countdownTimeout); //JS puro
    //     setIsActive(false);
    //     setTime(0.1*60);
    //     setHasFinished(false);
    // }

    // useEffect(() => {
    //     if(isActive && time > 0){
    //        countdownTimeout = setTimeout(()=> {
    //             setTime(time-1);;
    //         }, 1000)
    //     }else if (isActive && time === 0){
    //         setHasFinished(true);
    //         setIsActive(false);
    //         startNewChallenge();
    //     }
    // },[isActive, time]);


    return (
        <InfoBoxContext.Provider value={{
            isInfoBoxOpen,
            closeInfoBox,
            openInfoBox,
            
        }}>
            {children}
            {isInfoBoxOpen && <InfoBox/>}
        </InfoBoxContext.Provider>
    )
}