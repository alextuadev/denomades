import React, { createContext, useState } from "react"

export const AppContext = createContext();




export const DataProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("CLP");
  const [currencies, setCurrencies] = useState([]);

  return (
    <AppContext.Provider value={{
      cart,
      setCart,
      baseCurrency,
      setBaseCurrency,
      currencies,
      setCurrencies
    }} >
      { children}
    </AppContext.Provider >
  )
}