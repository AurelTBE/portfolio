import React, { createContext, useState } from 'react'

interface ContextState {
    activePage: string,
    handleActivePage: any
}

export const State = createContext({} as ContextState)

export const StateProvider = ({children}:any) => {
    const [activePage, setActivePage] = useState<string>("")

    const handleActivePage = (currentPage: string) => {
        setActivePage(currentPage)
    }

    return (
        <State.Provider value={{activePage, handleActivePage}}>
            {children}
        </State.Provider>
    )
}