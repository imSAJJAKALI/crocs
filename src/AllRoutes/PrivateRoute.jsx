import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'



const PrivateRoute = ({children}) => {
const {isAuth}=useContext(AuthContext)

if(!isAuth){
    return <Navigate to='/login' ></Navigate>
}


  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute