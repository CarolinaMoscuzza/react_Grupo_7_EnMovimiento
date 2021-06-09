import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Nombre: 'Bolso Negro Nike ',
        Size: 'Unico',
        Categoria: ['En oferta'],
        
    },
    {
        Nombre: 'Zapatillas',
        Size: '44-46',
        Categoria: ['Novedad'],
        
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                            
                            </tr>
                        </thead>

                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;