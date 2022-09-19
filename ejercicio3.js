const mysql = require("mysql2");
const { MongoClient } = require('mongodb');

const connectToDB = (ip, port, isMongoConnection) => {
    if (isMongoConnection) {
        connectToMongoDB(ip, port)
          .then(console.log)
          .catch(console.error)
    }
    else {
        connectToMysqlDB(ip,port)
          .then(console.log)
          .catch(err => console.log(err));
    }
}

const connectToMysqlDB = async (ip,port) => {

    const connection = mysql.createConnection({
    host: ip,
    port,
    // user: 'usuario aqui',
    // password: 'password aqui',
    });
    return await connection;
};

const connectToMongoDB = async (ip, port) => {

    const url = `mongodb://${ip}:${port}`;
    const client = new MongoClient(url);

    await client.connect();
    console.log('Connected successfully to server');

    return "done";

}

// Para correr esta ejecución y querer conectarse a MongoDB
// connectToDB('<ingrese su ip aqui>','<ingrese el puerto aqui>',true);

// Para correr esta ejecución y querer conectarse a MySQL
// connectToDB('<ingrese su ip aqui>','<ingrese el puerto aqui>',false);