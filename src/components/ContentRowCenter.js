import React from 'react';
import UltimoProductoInDb from './UltimoProductoInDb';
import ProductosInDb from './ProductosInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- LULTIMO PRODUCTO in DB -->*/}
            <UltimoProductoInDb />
            {/*<!-- End content row ULTIMO PRODUCTO in Data Base -->*/}

            {/*<!-- Productos in DB -->*/}
            <ProductosInDb />

        </div>
    )
}

export default ContentRowCenter;