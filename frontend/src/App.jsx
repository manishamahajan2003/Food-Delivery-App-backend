// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './Components/footer/Footer'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
   <>
   {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
      <Route path='verify' element={<Verify/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App