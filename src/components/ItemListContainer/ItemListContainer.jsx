import React from 'react'
import camisetaImg from "../../utiles/img/bocaimg.jpeg"

function ItemListContainer(props) {
  return (
    <main className="container-sm mt-5">
        <h2 className='fontP'>Productos</h2>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-4">
                    <div className='card'>
                      <img src={camisetaImg} alt="" className='card-img-top'/>
                      <div className='card-body'>
                        <h5 className='card-title'>Boca Juniors</h5>
                        <p className='card-text'>Camiseta titular Boca Juniors 2024</p>
                        <button className='btn btn-secondary w-100'>Agregar al carrito</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

  )
}

export default ItemListContainer