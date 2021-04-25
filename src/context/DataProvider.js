import React, { createContext, useState } from "react"

export const AppContext = createContext();

export const DataProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{
      cart,
      setCart
    }} >
      { children}
    </AppContext.Provider >
  )
}