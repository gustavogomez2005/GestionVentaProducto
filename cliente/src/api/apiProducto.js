import axios from 'axios'

export const mostrarProd = async ()=>{
   return await axios.get("http://localhost:3000/productomostrar")
}

export const altaProd = async (datosProd)=>{
   return await axios.post('http://localhost:3000/productoalta', datosProd)
}

export const eliminarProd = async(id)=>{
    const respuesta =  await axios.delete(`http://localhost:3000/productobaja/${id}`)
    return respuesta.data;
}


export const buscarProd = async(id)=>{
    const respuesta =  await axios.get(`http://localhost:3000/productobuscar/${id}`)
    console.log(respuesta);
    return respuesta.data;
}
