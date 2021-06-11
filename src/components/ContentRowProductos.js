import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Productos en DB --> */

let productosInDB = {
    title: 'Productos',
    color: 'primary', 
    cuantity: 24,
    icon: 'fa-clipboard-list'
}

/* <!-- Total Categorias --> */

let totalCategorias = {
    title:' Categorias', 
    color:'success', 
    cuantity: 2,
    icon:'fa-award'
}

/* <!-- Usuarios quantity --> */

let usersQuantity = {
    title:'Users' ,
    color:'warning',
    cuantity: 4,
    icon:'fa-user-check'
}

let cartProps = [productosInDB, totalCategorias, usersQuantity];

function ContentRowProductos(){
    return (
    
        <div className="row">
            
            {cartProps.map( (producto, i) => {

                return <SmallCard {...producto} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProductos;