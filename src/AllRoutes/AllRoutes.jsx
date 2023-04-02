import React from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import AdminPaage from '../Admin/AdminPaage'
import Edit from '../Admin/Edit'

import Footer from '../Componets/Footer'
import Login from '../Componets/Login'

import Mid from '../Componets/Mid'
import Navbar from '../Componets/Navbar'
import Signup from '../Componets/SignUp'
import Products from '../Componets/Products'
import Cart from '../Componets/Cart'
import PaymentPage from '../Componets/Payment'






const AllRoutes = () => {
  return (
   
    <>  
      <Navbar/>
   <Routes>
    <Route path="/" element={<Mid/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/products' element={<Products/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path='/payment' element={<PaymentPage/>} />
     
    <Route path="/admin" element={<AdminPaage/>}/>
    <Route path="/edit/:id"  element={<Edit/>} />
   </Routes>
   <Footer/>
   </>

  )
}

export default AllRoutes