import React from 'react';
import imagenFondo from '../assets/images/deportista.jpg';

function UltimoProductoInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-blue-800">Ultimo Producto in <i className="fas fa-database"></i></h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>La vida Es Movimiento, quedarse quieto no es una opción!!!!</p>
                    <p>Hagas lo que hagas, hazlo intensamente</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Productos</a>
                </div>
            </div>
        </div>
    )
}

export default UltimoProductoInDb;
