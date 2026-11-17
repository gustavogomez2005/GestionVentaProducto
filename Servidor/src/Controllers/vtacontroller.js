import {bdd} from '../database/conexion.js';
const base = await bdd()

export const iniciovta = (pet, resp)=>{
    resp.send('estoy en ventas')
}

export const altavta = (pet, resp)=>{
    let {id, cant, idcli, idprod} = pet.body;
    try {
        let altasql = "INSERT INTO venta (idventa,cantidad,cliente_idcliente,producto_idproducto) VALUES ('"+ parseInt(id)+"','"+ parseInt(cant)+"','"+ parseInt(idcli)+"','"+ parseInt(idprod)+"');";
        const [respuesta] = base.query(altasql);
        resp.json(respuesta)
    } catch (error) {
        resp.send(`error al agregar una venta\n${error}`)
    }
}

export const mostrarvta = async (pet, resp)=>{
    try {
        let mostrarsql = "select idventa, cantidad, cliente_idcliente, producto_idproducto from venta;";
        const [registrosvta] = await base.query(mostrarsql);
        resp.send(registrosvta)
    } catch (error) {
        resp.send('error, no puede mostrar los datos de todos los ventas')
    }
    
}

export const modificarvta = (pet, resp)=>{
    resp.send('vamos a cambiar los datos de un ventas')
}

export const bajavta = (pet, resp)=>{
    resp.send('vamos a eliminar un ventas')
}


