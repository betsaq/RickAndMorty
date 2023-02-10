import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickandMortyService from '../../services/RickAndMorty.service';

export const Cards = () => {


const [cartas, setCartas]= useState([]);


useEffect(() => {//hook de escucha activa de cambios
 RickandMortyService.getAllCharacters()
  .then((data) => setCartas( data.results))
  .catch((error)=>console.log(error));

}, [cartas]) // variable para ver si cambia


  const CardsList = cartas.map((m) => <Card carta={m} key={m.id} />);
 /* console.log("props" + JSON.stringify(props));*/
  return (
    <div className="album py-5 bg-light">
          <div className="container">
      
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
             {CardsList}
            </div>
          </div>
        </div>
  )
}

export default Cards
