import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProductos from './ContentRowProductos';
import Chart from './Chart';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-5">
						
						<h1 className="h3 mb-0 text-blue-800">DASHBOARD</h1>
						</div>	
					
				
					{/*<!-- Content Row Productos-->*/}
					<ContentRowProductos />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;