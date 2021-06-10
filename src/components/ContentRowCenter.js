import React from 'react';
import UltimoProductoInDb from './UltimoProductoInDb';
import MarcasInDb from './MarcasInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- LULTIMO PRODUCTO in DB -->*/}
            <UltimoProductoInDb />
            {/*<!-- End content row ULTIMO PRODUCTO in Data Base -->*/}

            {/*<!-- Categorias in DB -->*/}
            <MarcasInDb />
            

        </div>
    )
}

export default ContentRowCenter;