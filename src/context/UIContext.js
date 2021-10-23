import React, { createContext, useState } from "react";

export const UIContext = createContext()

export const UIProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    
    return(
        <UIContext.Provider value={{loading, setLoading}}>
            {children}
        </UIContext.Provider>
    )

}