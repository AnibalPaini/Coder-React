import React from 'react'
import "../../App.css";
import { Link } from "react-router-dom";

const NavbarFilter = () => {
  return (
    <div className='d-flex justify-content-center gap-5 align-items-center container-fluid py-3 border-bottom border-secondary'>
        <Link to="/productos" className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>Todos</Link>
        <Link to="/productos/categoria/1" className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>Remeras</Link>
        <Link to="/productos/categoria/2" className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>Musculosas</Link>
        <Link to="/productos/categoria/3" className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>Bermudas</Link>
    </div>
  )
}

export default NavbarFilter