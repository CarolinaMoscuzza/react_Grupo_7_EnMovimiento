import React from 'react';
import imagenFondo from '../assets/images/en-Movimiento.jpg';


function Panel(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-blue-800">La Vida Es Movimiento ... </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" movimiento "/>
                    </div>
                    <center>
                    <p> ... quedarse quieto no es una opción!!!!</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/ProductInDb">Ver Productos</a>               
                     </center>
                </div>
            </div>
        </div>
    )
}

export default Panel;
