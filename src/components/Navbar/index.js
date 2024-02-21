import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav className="navigation navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><Link style={{textDecoration: 'none'}} to="/about" > About Us </Link></a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Corporate</a></li>
                        <li><a className="dropdown-item" href="#">Weddings</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Party</a></li>
                    </ul>
                    </li>
                    <Link style={{textDecoration: 'none', marginTop: '3rem'}} to="/"><a className="navbar-brand" style={{fontSize: '2.5rem'}}>House of Dotty</a></Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>  
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Venues</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">FAQ</a></li>
                        <li><a className="dropdown-item" href="#">Gallery</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> 
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact US</a>
                    </li>               
                </ul>            
                </div>
            </div>
            </nav>
    </div>
  )
}
