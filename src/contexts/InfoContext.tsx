import {createContext, ReactNode} from "react";

interface InfoContextData{

}

interface InfoProviderProps{
    children: ReactNode;
}


export const InfoContext = createContext({} as InfoContextData);

export function InfoProvider ({children}: InfoProviderProps){


    
    
    return (
        <InfoContext.Provider value={{
            
        }}>
        {children}
    </InfoContext.Provider>
    
  );
};