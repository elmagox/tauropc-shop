import React, { createContext, useState } from "react";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { AlertTemplate } from '../components/AlertTemplate/AlertTemplate'

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 4000,
  offset: '10px',
  transition: transitions.FADE
}


export const UIContext = createContext()

export const UIProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    
    return(
        <AlertProvider template={AlertTemplate} {...options}>
            <UIContext.Provider value={{loading, setLoading}}>
                {children}
            </UIContext.Provider>
        </AlertProvider>
    )

}