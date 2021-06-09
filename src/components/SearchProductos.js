import React,{useState, useEffect, useRef} from 'react';


function SearchProductos(){
	
	const [productos,setProducto] = useState([]);
	
	const [keyword,setKeyword] = useState('');
	let inputSearch = useRef();
	
	
	// Credenciales de API
	//const apiKey = " " ; // Intenta poner cualquier cosa antes para probar

	const url = "/api/productos"
	
	
	useEffect(() => {
		fetch(url).then( r => r.json()).then( data => {
			//console.log(data)
			if(!data.Error){
				setProducto(data.Search)
			} else {				
				setProducto([])
			}
		});
	}, [keyword])

	const buscarProd = e => {
		e.preventDefault();
		setKeyword(inputSearch.current.value)
	}
	return(
		<div className="container-fluid">
			{
				//apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={ buscarProd }>
								<div className="form-group">
									<label htmlFor="">Buscar por Nombre:</label>
									<input ref={inputSearch} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">BUSCAR</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos: {keyword} </h2>
						</div>
						{/* Listado de Productos */}
						{
							productos.length > 0 && productos.map((productos, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{productos.Nombre}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={productos.Image}
														alt={productos.Nombre} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{productos.Size}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ productos.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				//:<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchProductos;
