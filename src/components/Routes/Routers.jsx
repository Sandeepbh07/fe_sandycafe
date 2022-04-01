import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../landingpage/LandingPage'
import Catalog from '../Browse/Catalog'
import Cart from '../Cart/Cart'
import Signin from '../Auth/Signin/Signin'
import Signup from '../Auth/Signup/Signup'
import Signout from '../Auth/Signout/Signout'

const Routers = () => {
    const deployRoutes=()=>{
       return(
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/signin' element={<Signin />}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signout' element={<Signout/>}/>
            </Routes>
        </Router>
       ) 
    }
  return (
    <>
    {deployRoutes()}
    </>
  )
}

export default Routers