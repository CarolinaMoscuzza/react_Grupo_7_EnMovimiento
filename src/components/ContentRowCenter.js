import React from 'react';
import Panel from './Panel';
import MarcasInDb from './MarcasInDb';
import Usuarios from './Usuarios';
import Categorias from './Categorias'

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Slider -->*/}
            <Panel />
            <Categorias />
            
            {/*<!-- End content row Slider -->*/}

            {/*<!-- Marcas in DB -->*/}
            <MarcasInDb />
            <Usuarios />

        </div>
    )
}

export default ContentRowCenter;