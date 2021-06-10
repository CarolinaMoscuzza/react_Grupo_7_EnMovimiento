import React from 'react';


const MarcasList = (props) => {
    return ( 
        <tr>
            
            <td>{props.name}</td>
            <td>{props.count}</td>
            
        </tr>
    );
}
 
export default MarcasList;