import { Box, Tab } from '@mui/material/';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import { useState, useEffect } from 'react';
import TableProductManagement from './TableProductManagement';
import products from '@db/products_management'

const tabs = ['all', 'publish', 'draft', 'trash']

const TabsProductsManagement = () => {
  const [active, setActive] = useState('all')
  const [listProduct, setListProduct] = useState(null)

  useEffect(() => {
    if (active === 'all') {
      setListProduct(products)
    }
    else {
      setListProduct(products.filter(product => product.status === active))

    }
  }, [active])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={active}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div className="flex gap-3 items-center">
            <div>Products:  </div>
            <TabList onChange={(event, newValue) => setActive(newValue)} aria-label="lab API tabs example"
              sx={{
                ".MuiButtonBase-root": {
                  color: 'var(--text)'
                },
                ".Mui-selected": {
                  color: 'var(--accent)'
                }
              }}
              TabIndicatorProps={{
                style: {
                  display: 'none'
                }
              }}
            >
              {
                tabs.map(tab => {
                  return (
                    <Tab label={tab} value={tab} />
                  )
                })
              }
            </TabList>
          </div>
        </Box>
        {
          tabs.map(tab => {
            return (
              <TabPanel className='!p-0' value={tab}>
                <TableProductManagement products={listProduct ? listProduct : products} />
              </TabPanel>
            )
          })
        }
      </TabContext>
    </Box>
  )
}

export default TabsProductsManagement
