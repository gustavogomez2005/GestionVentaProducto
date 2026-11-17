import mysql from 'mysql2/promise';

export const bdd = async()=>{
    try {
        const conectar = mysql.createPool({
            host: "Localhost",
            database: "gestion",
            user: "root",
            password: "Tannf130"
        })
        console.log(`conectado`);
        return conectar;
    } catch (error) {
        console.log(`error !! no se puede conectar la bdd gestion \n ${error}`);
    }
}