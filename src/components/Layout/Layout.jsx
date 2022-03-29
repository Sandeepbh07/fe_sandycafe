import React from 'react'
import NavBar from './navbar/NavBar'
import Main from  './Main/Main'
import Footer from './Footer/Footer'
import './layout.css'
const Layout = (props) => {
    const renderLayout=()=>(
        <div className="layout">
            <NavBar/>
            <Main title={props.title} background={props.background} backdrop={props.backdrop}>
              {props.children}
            </Main>
            <Footer/>
        </div>
    )
  return (
    <>
      {renderLayout()}
    </>
  )
}

export default Layout
