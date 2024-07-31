import { createContext, useContext, useState } from "react"

const ShopContext = createContext(undefined)

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState(null)
  const changeShop = (shop) => {
    console.log(shop)
    setShop(shop)
  }

  return (
    <ShopContext.Provider value={{ shop, changeShop }}>
      {children}
    </ShopContext.Provider>
  )
}
export const useShop = () => useContext(ShopContext)