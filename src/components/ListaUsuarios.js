import React from 'react';


const ListaUsuarios = (props) => {
    return ( 
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
        </tr>
    );
}
 
export default ListaUsuarios;