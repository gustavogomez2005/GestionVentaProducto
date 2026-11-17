import {bdd} from '../database/conexion.js';
const base = await bdd()

export const inicioprod = (pet, resp)=>{
    resp.send('estoy en producto')
}

export const altaprod = async (pet, resp)=>{
    let {id, descri, precio} = pet.body;
    try {
        let altasql = "INSERT INTO producto (idproducto,descripcion,precio) VALUES ('"+ parseInt(id) +"', '"+ descri +"', '"+ parseFloat(precio) +"');";
        const [respuesta] = await base.query(altasql);
        resp.json(respuesta)
    } catch (error) {
        resp.send(`Error !!, no se ingresó el producto \n${error}`)
    }
}

export const mostrarprod = async(pet, resp)=>{
    try {
        let mostrarsql = "select idproducto, descripcion, precio from producto;";
        const [resgitrosProd] = await base.query(mostrarsql);
        resp.send(resgitrosProd);
    } catch (error) {
        resp.send('error !! no puede mostrar los datos de todos los producto')    
    }
    
}

export const modificarprod = (pet, resp)=>{
    resp.send('vamos a cambiar los datos de un producto')
}

export const bajaprod = async (pet, resp)=>{
    let {id} = pet.params;
    const numId = parseInt(id, 10);
    if (isNaN(numId)) {
        return resp.status(400).json({message: 'El id debe ser un número'})
    }
    try {
        let bajasql = "DELETE FROM producto WHERE idproducto = '"+ numId+"';";
        const [respuesta] = await base.query(bajasql);
        if (respuesta.affectedRows === 0) {
            resp.status(404).json({message: 'No se encontró el artículo'})
        } else {
            resp.json({message: 'Producto correctamente eliminado !!'})
        }
    } catch (error) {
        resp.status(500).json({message: `Error al intentar eliminar al producto \n${error}`})
    }
}

export const buscarprod = async (pet, resp)=>{
    let {id} = pet.params;

    const numId = parseInt(id, 10);
    if (isNaN(numId)) {
        return resp.status(400).json({message: 'El ID del Producto debe ser un número !!'});
    }

    try {
        let buscaidsql = "select idproducto, descripcion, precio from producto where idproducto = '"+ parseInt(id, 10) +"';";
        const [respuesta] = await base.query(buscaidsql);
        if (respuesta.length === 0) {
            resp.status(404).json({message: 'Producto Inexistente'});
        } else {
            resp.json(respuesta[0])    
        }
    } catch (error) {
        resp.send('Error en la búsqueda del artículo !!!')    
    }
    
}
