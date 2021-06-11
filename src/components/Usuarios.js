import React, { Component } from 'react';
import ListaUsuarios from "./ListaUsuarios"

class Usuarios extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersList: [],
			
		}
	}

		componentDidMount(){
        fetch('/api/users').then(r=>r.json()).then(respuesta=>{
			this.setState({usersList: respuesta.data.usuarios})
			
        })
    }
	render(){ 
		return ( 

			<React.Fragment>
				<div className="container-fluid">
						 {/*<!-- Lista de Usuarios -->*/}
					<h1 className="h3 mb-2 text-gray-800">Usuarios Registrados <i className="fas fa-id-card"></i> </h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>ID</th>
                                            <th>Nombre</th>
											<th>Apellido</th>
                                            <th>Correo Electronico</th>
                                           
										</tr>
									</thead>
									<tfoot>
									</tfoot>
									<tbody>
										{
											this.state.usersList.map((users,i) => {
												return <ListaUsuarios key={i} {...users} />
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
 
export default Usuarios;
