import React, { createContext, useState } from 'react'


export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {

  const [cartItem,setCartItem]=useState([])

  return (
   <>
   <AuthContext.Provider value={{cartItem,setCartItem}}>
{children}
   </AuthContext.Provider>
   </>
  )
}

export default AuthContextProvider