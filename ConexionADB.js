const mysql = require("mysql2");
const { MongoClient } = require('mongodb');

const connectToMysqlDB = async (ip,port) => {
    /* La conexión queda contenida en la variable "connectionToMySql" la cual se usaría en caso de querer realizar una query.
     en el caso de querer llamarla para ejecutar una query por fuera de la función, se podría darle scope global a la variable connectionToMySql, para
     reutilizarla por fuera de la misma. */
    let connectionToMySql = await mysql.createConnection({
    host: ip,
    port,
    // user: 'usuario aqui',
    // password: 'password aqui',
    });

    console.log('Connected successfully to server');
    return "done";
};

const connectToMongoDB = async (ip, port) => {
    /* La conexión a la DB queda contenida en la variable "client".*/
    const url = `mongodb://${ip}:${port}`;
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    return "done";

}

export {connectToMongoDB, connectToMysqlDB}