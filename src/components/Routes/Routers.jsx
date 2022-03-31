import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../landingpage/LandingPage'
import Catalog from '../Browse/Catalog'
const Routers = () => {
    const deployRoutes=()=>{
       return(
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
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