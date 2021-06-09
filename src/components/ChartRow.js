import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Nombre}</td>
                    <td>{props.Size}</td>
                    <td>{props.Categoria}</td>
              
                </tr>
            )
    }
    
        

export default ChartRow;