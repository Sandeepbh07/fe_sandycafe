import React from 'react'
import {faBars,faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import logo from '../../../assets/images/momo.jpg'
const NavBar = () => {

  const renderNavbar=()=>(
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <a className="navbar-brand" href="/home">
        <img src={logo} alt="Logo.." className='logo'/>
        <label htmlFor="" style={{ fontSize:'14px',fontWeight:'bold' }}>
        Sand<span className='logo-label'>yC</span>af&egrave;
          </label>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor:'var(--primary-green)' }}>
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/browse">Browse</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signin">Sign In</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">Cart</a>
          </li>
        </ul>
        <form className="d-flex">
          <div className="input-group">
          <input className="form-control" type="text" placeholder="Search..." aria-label="Search" size="40" />
          <div className="input-group-append">
          <button className="btn btn-outline-success" style={{ background:'var(--primary-green)',color:'var(--primary-white)' }} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
  )
  return (
    <>
     {renderNavbar()} 
    </>
  )
}

export default NavBar
