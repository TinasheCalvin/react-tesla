import { createContext, useReducer } from 'react'
import teslaReducer, { initialState } from './teslaReducer'

export const TeslaContext = createContext(initialState)

export const TeslaContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(teslaReducer, initialState)

    const toggleSidebar = () => {
        let sidebarOpen = !state.sidebarOpen
        dispatch({
            type: 'TOGGLE_SIDEBAR',
            payload: sidebarOpen
        })
    }

    let value = {
        sidebarOpen: state.sidebarOpen,
        toggleSidebar
    }

    return <TeslaContext.Provider value={value}>{children}</TeslaContext.Provider>
}