import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LandingPage from '../landingpage/LandingPage'
const Routers = () => {
    const deployRoutes=()=>{
       return(
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
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