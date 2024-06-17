import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.scss'

import { ThemeProvider } from 'styled-components'
import { useTheme } from './contexts/themeContext'
import ThemeStyles from './styles/theme'
import { AppBar } from './layouts/Appbar'
import { Routes, Route } from 'react-router-dom'
import SalesAnalytics from '@pages/SalesAnalytics'
import SellerLists from '@pages/SellerLists'
import SellerTable from '@pages/SellerTable'
import SellersGrid from '@pages/SellersGrid'
import SellerProfiles from '@pages/SellerProfiles'
import RevenuByPeriod from '@pages/RevenueByPeriod'

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
            <Routes>
              <Route path='/' element={<SalesAnalytics />} />
              <Route path='/sellers-list' element={<SellerLists />} />
              <Route path='/sellers-table' element={<SellerTable />} />
              <Route path='/sellers-grid' element={<SellersGrid />} />
              <Route path='/seller-profile' element={<SellerProfiles />} />
              <Route path='/revenue-by-period' element={<RevenuByPeriod />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>

  )
}

export default App
