import {mostrarVta} from '../api/apiVentas.js';
import {useState, useEffect} from 'react';

function PagVentaMostrar() {
    const [vta, setVta] = useState([]);
    const mostrar = async ()=>{
        const respuesta = await mostrarVta()
        console.log(respuesta.data);
        setVta(respuesta.data)
    }

    useEffect(()=>{
        mostrar()
    }, [])

    return (
        <div>
            <h1>Mostrar Venta</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">ID Cliente</th>
                        <th scope="col">ID Producto</th>
                    </tr>
                </thead>                
                <tbody>
                    {
                        vta.map(venta =>{
                              return  <tr  key={venta.idventa}>
                                    <td>{venta.idventa}</td>
                                    <td>{venta.cantidad}</td>
                                    <td>{venta.cliente_idcliente}</td>
                                    <td>{venta.producto_idproducto}</td>
                                </tr> 
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PagVentaMostrar