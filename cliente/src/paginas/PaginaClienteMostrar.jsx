import {useEffect, useState} from 'react';
import {mostrarCli} from '../api/apiCliente.js';

function PagClienteMostrar() {

    const [cli, setCli] = useState([])

    const mostrar = async ()=> {
            const respuesta = await mostrarCli()
            console.log(respuesta.data);
            setCli(respuesta.data);
        }


    useEffect(()=>{
        mostrar()
    }, [])

    return (
        <div>
            <h1>Mostrar todos los datos de los Clientes</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Ciudad</th>
                    </tr>
                </thead>                
                <tbody>
                    {
                        cli.map(cliente =>{
                              return  <tr  key={cliente.idcliente}>
                                    <td>{cliente.idcliente}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.ciudad}</td>
                                </tr> 
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PagClienteMostrar