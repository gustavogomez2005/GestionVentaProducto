import {bdd} from '../database/conexion.js';
import Swal from 'sweetalert2';

const base = await bdd()

export const iniciocli = (pet, resp)=>{
    resp.send('estoy en clientes')
}

export const altacli = async (pet, resp)=>{
    let {id, nom, direc, tel, ciu} = pet.body;

    try {
        let alta = "INSERT INTO cliente (idcliente,nombre,direccion,telefono,ciudad) VALUES('"+ parseInt(id) +"','"+ nom +"', '"+ direc +"', '"+ tel +"', '"+ ciu +"');";
        const [respuesta] = await base.query(alta);
        console.log(respuesta);
        resp.json({
            id: respuesta.insertId,
            nom,
            direc,
        })
    } catch (error) {
        resp.send(`error al insertar el cliente \n${error}`)
    }
}

export const mostrarcli = async(pet, resp)=>{
    try {
        let mostrarsql = "select idcliente, nombre, direccion, telefono, ciudad from cliente;";
        const [registrosCli]= await base.query(mostrarsql);
        //resp.send(registrosCli)
        resp.json(registrosCli)
    } catch (error) {
        resp.send(`error, no puede mostrar los clientes`);
    }
}

export const modificarcli = (pet, resp)=>{
    resp.send('vamos a cambiar los datos de un cliente')
}

export const bajacli = async(pet, resp)=>{
    let {id} = pet.params;
    const numId = parseInt(id, 10)
    if (isNaN(numId)) {
        return resp.status(404).json({message: 'El ID debe ser un número'})
    }
    try {
        let bajasql = "delete c FROM cliente as c inner join venta as v on c.idcliente = v.cliente_idcliente WHERE c.idcliente = '"+ numId+"';";
        const [respuesta] = await base.query(bajasql);
        if (respuesta.affectedRows === 0) {
            resp.status(404).json({message: 'No encontró al cliente'})
        } else {
            resp.json(respuesta[0],{message: 'Cliente eliminado exitosamente'})
        }
    } catch (error) {
        resp.status(500).json({message: 'error al intentar eliminar al cliente'})
    }
}

export const buscarcli = async (pet, resp)=>{
    const {id} = pet.params;

    // 1. Validar si el ID recibido es un número válido
    const idNum = parseInt(id, 10);
    if (isNaN(idNum)) {
        return resp.status(400).json({ message: "El ID del cliente debe ser un número válido" });
    }    
    try {
        let buscarsql = "select idcliente, nombre, direccion, telefono, ciudad from cliente where idcliente = '"+ parseInt(id) +"'";
        const [respuesta] = await base.query(buscarsql);

        console.log(respuesta);
        if (respuesta.length === 0) {
            return resp.status(404).json({message: "Cliente inexistente !!"})
        } else {
            resp.json(respuesta[0])        
        }
     } catch (error) {
        console.error(`Error al buscar al cliente ${id}`,error)
        return resp.status(500).json({ message: "Error en el servidor al buscar al cliente" });
    }
}

