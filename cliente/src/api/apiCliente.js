import axios from 'axios';

export const mostrarCli = async ()=>{
    return await axios.get('http://localhost:3000/climostrar');
}

export const altaCli = async (objCli)=>{
    return await axios.post('http://localhost:3000/clialta', objCli)
}

export const eliminarCli = async(id)=>{
    const respuesta =  await axios.delete(`http://localhost:3000/clibaja/${id}`)
    return respuesta.data;
}

export const buscarCli = async(id)=>{
    const respuesta =  await axios.get(`http://localhost:3000/clibuscar/${id}`)
    return respuesta.data;
}
