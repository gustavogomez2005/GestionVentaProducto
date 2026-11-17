import {mostrarProd} from '../api/apiProducto.js';
import {useState, useEffect} from 'react';

function PagProdMostrar() {
    const [prod, setProd] = useState([]);
    const mostrar = async ()=>{
        const respuesta = await mostrarProd()
        console.log(respuesta.data);
        setProd(respuesta.data)
    }

    useEffect(()=>{
        mostrar();
    }, [])

    return (
        <div>
            <h1>Mostrar todos los Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>                
                <tbody>
                    {
                        prod.map(producto =>{
                              return  <tr  key={producto.idproducto}>
                                    <td>{producto.idproducto}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.precio}</td>
                                </tr> 
                        })
                    }
                </tbody>
            </table>        
        </div>
    )
}

export default PagProdMostrar