import React from 'react';
import Panel from './Panel';
import MarcasInDb from './MarcasInDb';
import Usuarios from './Usuarios';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Slider -->*/}
            <Panel />
            <Usuarios />
            {/*<!-- End content row Slider -->*/}

            {/*<!-- Marcas in DB -->*/}
            <MarcasInDb />
            

        </div>
    )
}

export default ContentRowCenter;