import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.scss'

// import './App.css'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './contexts/themeContext'
import ThemeStyles from './styles/theme'
import { AppBar } from './layouts/Appbar'

function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <div className="app">
          <div className="app_content">
            <AppBar
              toggleTheme={toggleTheme}
              theme={theme}
            />
            <div className="router mt-5">
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>

  )
}

export default App
