import React, { createContext, useState } from 'react'


export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {

  const [cartItem,setCartItem]=useState([])
  const [isAuth,setIsAuth]=useState(false)

  return (
   <>
   <AuthContext.Provider value={{cartItem,setCartItem,isAuth,setIsAuth}}>
{children}
   </AuthContext.Provider>
   </>
  )
}

export default AuthContextProvider