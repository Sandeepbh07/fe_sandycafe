import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import {faBars,faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import logo from '../../../assets/images/momo.jpg'
const NavBar = () => {
    const {isAuthenticated}=useAuth0()
  const renderNavbar=()=>(
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <Link className="navbar-brand" to="/home">
        <img src={logo} alt="Logo.." className='logo'/>
        <label htmlFor="" style={{ fontSize:'14px',fontWeight:'bold' }}>
        Sand<span className='logo-label'>yC</span>af&egrave;
          </label>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor:'var(--primary-green)' }}>
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={window.location.pathname==='/catalog'?"nav-link active":"nav-link"} aria-current="page" to="/catalog">Browse</Link>
          </li>
          {!isAuthenticated && <>
            <li className="nav-item">
            <Link className={window.location.pathname==='/signin'?"nav-link active":"nav-link"} to="/signin">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Register</Link>
          </li>
          </> }
          <li className="nav-item">
            <Link className={window.location.pathname==='/cart'?"nav-link active":"nav-link"} to="/cart">Cart</Link>
          </li>
          {isAuthenticated &&  <li className="nav-item">
            <Link className={window.location.pathname==='/signout'?"nav-link active":"nav-link"} to="/signout">Sign Out</Link>
          </li>}
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
