
import React, { createContext } from "react";
import { useState } from "react";

export const themes = {

    light: {
        color: '#14212A',
        background: '#fff'
        
    },
    dark: {
        color: '#fff',
        background: '#14212A'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}