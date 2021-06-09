import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Productos en DB --> */

let productosInDB = {
    title: 'Productos in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total Categorias --> */

let totalCategorias = {
    title:' Total Categorias', 
    color:'success', 
    cuantity: 2,
    icon:'fa-award'
}

/* <!-- Usuarios quantity --> */

let usersQuantity = {
    title:'Users quantity' ,
    color:'warning',
    cuantity: 3,
    icon:'fa-user-check'
}

let cartProps = [productosInDB, totalCategorias, usersQuantity];

function ContentRowProductos(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProductos;