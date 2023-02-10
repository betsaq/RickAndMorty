/*teclear rafc= coloca una funcion flecha */

import React, { useState } from 'react'


export const Footer = () => {

const [clicks,setClicks]= useState(0);

const year = new Date().getFullYear();
const companyName = "Betsa";
const handleClick = () => {

setClicks(clicks + 1);
console.log("holaa");
}
  
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-center align-items-center  py-3 my-4 border-top ">
      <p className="col-md-4 mb-0 text-muted">&copy; {year} - {companyName} </p>
      <span
          to={"/"}
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        onClick={handleClick} >
          <img className="App-logo" height="52" src="RM.png" alt="portal-giratorio" />
        </span>
  
      <ul className="nav col-md-4 justify-content-end">


       <li className="nav-item"  ><a href="#" className="nav-link px-2 text-muted">Clicks={clicks}</a></li>
     
      </ul>
    </footer>
  </div>
  )
}

export default Footer
