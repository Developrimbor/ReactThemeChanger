import React from 'react'
import LocalStorage from "./useLocalStorage"
import './theme.css'

function DarkLightMode() {
    const [theme, setTheme] = LocalStorage('theme', "dark")
    const textTheme = theme === 'light' ? 'Black' : 'White'

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log(theme);

  return (

    <div className="darkLightMode" dataTheme = {theme}>
        <div className="container">
        <p>{textTheme}</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default DarkLightMode