import React, { createContext, useState } from 'react'

interface ContextState {
    activePage: string,
    handleActivePage: (page:string) => void
}

export const State = createContext({} as ContextState)

export const StateProvider = ({children}:{children: React.ReactNode}) => {
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