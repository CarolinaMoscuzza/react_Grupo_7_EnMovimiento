import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProductos from './ContentRowProductos';
import ProductInDb from './ProductInDb';
import MarcasInDb from './MarcasInDb';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-5">
						
						<h1 className="h3 mb-0 text-blue-800">DASHBOARD by Gustavo Amil, María Bizari y A. Carolina Moscuzza</h1>
						</div>	
					
				
					{/*<!-- Content Row Productos-->*/}
					<ContentRowProductos />
					<ContentRowCenter />
					<ProductInDb />
					
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;