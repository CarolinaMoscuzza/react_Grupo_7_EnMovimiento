
import React,{useState, useEffect, useRef} from 'react';


function BuscarProductos(){
	
	const [products,setProducts] = useState([]);
	
	const [keyword,setKeyword] = useState('');
	
	let inputSearch = useRef();
	
	// Credenciales de API
	//const apiKey = '1e5a7b6f'; // Intenta poner cualquier cosa antes para probar
	
	const url = `/api/productos/image/${keyword}`; //Hay q ver como hacer q filtre por los diferentes productos por ID
    //`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`
	
	useEffect(() => {
        
		fetch(url).then( r => r.json()).then( data => {


			if(!data.Error){
				setProducts(data)
			} else {				
				setProducts([])
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
							<form method="GET" onSubmit={ buscarProd}>
								<div className="form-group">
									<label htmlFor="">Buscador de Producto:</label>
									<input ref={inputSearch} type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos para el ID: {keyword}</h2>
						</div>
						{/* Listado de Productos */}
						{
							products.length > 0 && products.map((products, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{products.nombre}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={products.id}
														alt={products.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{products.descripcion}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas </div> }
				</> }
	 		
				<div className="alert alert-danger text-center my-4 fs-2"></div>
		</div>
	)
}

export default BuscarProductos;