import React from 'react'
import { Link } from 'react-router-dom'
 


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Services">Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Projects">Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Design">Design</Link>
          </li>
         
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Header
