import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './provider/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

   // Project 02
   const [themeMode, setThemeMode] = useState("light");
   const lightTheme = () => {
    setThemeMode("light");
   }

   const darkTheme = () => {
    setThemeMode("dark");
   }

   const htmlElement = document.querySelector('html');

   useEffect(() => {
    htmlElement.classList.remove("light","dark")
    htmlElement.classList.add(themeMode);
   }, [themeMode])
   

  return (
    // <UserContextProvider>
    //   <h1>React with me - useContext</h1>
    //   <Login/>
    //   <Profile/>
    // </UserContextProvider>

    // Project 02
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme btn */}
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
