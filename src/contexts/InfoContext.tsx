import {createContext, ReactNode, useState, useEffect} from "react";

interface InfoContextData{

}

interface InfoProviderProps{
    children: ReactNode;
}


export const InfoContext = createContext({} as InfoContextData);

export function InfoProvider ({children}: InfoProviderProps){
    const [infoBox, setInfoBox] = useState(false);

    function infoBoxOpen(){

    }

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])
    
    
    return (
        <InfoContext.Provider value={{
            
        }}>
        {children}
    </InfoContext.Provider>

  );
};