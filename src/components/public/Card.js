import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({carta}) => {

  return (
    <div className="col">
    <div className="card shadow-sm">
      <img  width="100%"  src={carta.image} alt="image"/>
        
       <h3 className="mb-0 text-dark">{carta.name}</h3>
      <div className="card-body">
        
     
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-sm btn-outline-secundary">

        <Link to={`/detail/${carta.id}`} className="nav-link">
        Detalle
          </Link>

          </button>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>




  )
}

export default Card
