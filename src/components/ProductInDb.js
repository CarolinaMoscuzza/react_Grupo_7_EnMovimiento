import React, { Component } from 'react';
import ProductList from "./ProductList"

class ProductInDb extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productsList: [],
			
		}
	}

		componentDidMount(){
        fetch('/api/productos').then(r=>r.json()).then(respuesta=>{
			this.setState({productsList: respuesta.data.products})
			//console.log(respuesta)
        })
    }
	render(){ 
		return ( 

			<React.Fragment>
				<div className="container-fluid">
						 {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Productos de la Base de Datos <i className="fas fa-database"></i> </h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>ID/SKU</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
											
										</tr>
									</thead>
									<tfoot>
									</tfoot>
									<tbody>
										{
											this.state.productsList.map((products,i) => {
												return <ProductList key={i} {...products} />
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
 
export default ProductInDb;
