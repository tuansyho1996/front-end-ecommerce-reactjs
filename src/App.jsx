import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.scss'

import { ThemeProvider } from 'styled-components'
import { useTheme } from './contexts/themeContext'
import ThemeStyles from './styles/theme'
import { AppBar } from './layouts/Appbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SalesAnalytics from '@pages/Dashboard/SalesAnalytics'
import SellerLists from '@pages/Dashboard/SellerLists'
import SellerTable from '@pages/Dashboard/SellerTable'
import SellersGrid from '@pages/Dashboard/SellersGrid'
import SellerProfiles from '@pages/Dashboard/SellerProfiles'
import RevenuByPeriod from '@pages/Dashboard/RevenueByPeriod'
import TopProducts from '@pages/Products/TopProducts'
import ProductsGrid from '@pages/Products/ProductsGrid'
import ProductsManagement from '@pages/Products/ProductsManagement'
import ProductEditor from '@pages/Products/ProductEditor'
import BannerOffers from '@pages/Products/BannerOffers'
import Orders from '@pages/Orders'
import Statistics from '@pages/Statistics'
import Reviews from '@pages/Reviews'
import Customers from '@pages/Customers'
import Transactions from '@pages/Transactions'
import Login from '@pages/Login'
import { useLocation } from 'react-router-dom'
import { useShop } from '@contexts/shopContext'
import { getShop } from '@services/admin'
import ImportData from '@pages/ImportData'
import Profile from '@pages/Profile'

const profileShop = await getShop()

function App() {
  const [count, setCount] = useState(0)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const { shop, changeShop } = useShop()
  const navigate = useNavigate()
  console.log('check profile', profileShop?.metadata)
  useEffect(() => {
    changeShop(profileShop?.metadata)
  }, [])
  useEffect(() => {
    if (location.pathname === '/login' && shop) {
      navigate(-1)
    }
    if (location.pathname !== '/login' && !shop) {
      navigate('/login')
    }
  }, [shop])
  return (
    <>
      <ThemeProvider theme={{ theme: theme }}>
        <ThemeStyles />
        <div className={location.pathname !== '/login' ? 'app' : ''}>
          <div className={location.pathname !== '/login' ? 'app_content' : ''}>
            {
              location.pathname !== '/login' &&
              <AppBar
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<SalesAnalytics />} />
              <Route path='/sellers-list' element={<SellerLists />} />
              <Route path='/sellers-table' element={<SellerTable />} />
              <Route path='/sellers-grid' element={<SellersGrid />} />
              <Route path='/seller-profile' element={<SellerProfiles />} />
              <Route path='/revenue-by-period' element={<RevenuByPeriod />} />
              <Route path='/top-products' element={<TopProducts />} />
              <Route path='/products-grid' element={<ProductsGrid />} />
              <Route path='/products-management' element={<ProductsManagement />} />
              <Route path='/product-editor' element={<ProductEditor />} />
              <Route path='/banners' element={<BannerOffers />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/statistics' element={<Statistics />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/import-many-data' element={<ImportData />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>

  )
}

export default App
