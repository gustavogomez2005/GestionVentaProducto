import axios from 'axios'

export const mostrarVta = async ()=>{
   return await axios.get("http://localhost:3000/ventamostrar")
}

export const altavta = async (datosVenta)=>{
   return await axios.post('http://localhost:3000/ventaalta', datosVenta)
}

export const eliminarVta = async(id)=>{
    const respuesta =  await axios.delete(`http://localhost:3000/ventabaja/${id}`)
    return respuesta.data;
}


export const buscarVta = async(id)=>{
    const respuesta =  await axios.delete(`http://localhost:3000/ventabaja/${id}`)
    return respuesta.data;
}