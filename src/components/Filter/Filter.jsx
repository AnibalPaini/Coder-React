import React, { useState } from 'react'

function Filters({onChange}) {
  const [minPrice, setMinPrice]=useState(0)

  const handleChangeMinPrice=(event)=>{
    setMinPrice(event.target.value)
    onChange(prevState =>({
      ...prevState,
      minPrice:event.target.value
    }))
  }

  const handleChangeTeam=(event)=>{
    onChange(prevState =>({
      ...prevState,
      equipo:event.target.value,
      /* search: "",  */ 
    }))
  }

  const handleChangeSearch=(event)=>{
    onChange(prevState =>({
      ...prevState,
      search:event.target.value,
    }))
  }

  return (
    <section className='filtros d-flex justify-content-between'>
        <div>
            <label htmlFor='precio' for="formRange" className="form-label">Precio minimo</label>
            <div className='d-flex align-items-center w-100 gap-3'>
              <input type="range" id="precio" className="form-range w-75" min="0" max="20000" step="100" onChange={handleChangeMinPrice}></input>
              <span>${minPrice}</span>
            </div>
        </div>
        <div>
          <label htmlFor="buscar" className="form-label">Buscar</label>
          <input type="text" id='buscar' onChange={handleChangeSearch}/>
        </div>
        <div>
            <label htmlFor="equipo" className="form-label">Equipos:</label>
            <select className="form-select" aria-label="Default select" onChange={handleChangeTeam}>
                <option value="all">Todos</option>
                <option value="Boca Juniors">Boca Juniors</option>
                <option value="River Plate">River Plate</option>
                <option value="FC Barcelona">FC Barcelona</option>
                <option value="Chealse">Chealse</option>
                <option value="Argentina">Argentina</option>
                <option value="Tottenham">Tottenham</option>
                <option value="Manchester United">Manchester United</option>
            </select>
        </div>
    </section>
  )
}

export default Filters