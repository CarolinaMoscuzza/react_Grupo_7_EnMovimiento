import React, { Component } from 'react';
import MarcasList from "./MarcasList"

class MarcasInDb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoriasList: [],
			data: ["count", "countByCategory", "products"]
		}
	}

		componentDidMount(){
        fetch('/api/productos').then(r=>r.json()).then(respuesta=>{
			this.setState({categoriasList: respuesta.data["countByCategory"]})
			console.log(respuesta)
        })
    }
	render(){ 
		return ( 

			<React.Fragment>
				<div className="container-fluid">
						 {/*<!-- Categorias LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Marcas de Productos <i className="fas fa-tag"></i></h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>NOMBRE</th>
											<th>CANTIDAD EN STOCK</th>
										</tr>
									</thead>
									<tfoot>
									</tfoot>
									<tbody>
										{
											this.state.categoriasList.map((categoria,i) => {
												return <MarcasList key={i} {...categoria} />
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
				</div>
				    
        	</React.Fragment>
    	)
	}
}
 
export default MarcasInDb;
