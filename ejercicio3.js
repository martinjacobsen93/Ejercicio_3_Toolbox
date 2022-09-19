const { connectToMongoDB, connectToMysqlDB } = require("./ConexionADB");

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

// Para correr esta ejecución y querer conectarse a MongoDB
// connectToDB('<ingrese su ip aqui>','<ingrese el puerto aqui>',true);

// Para correr esta ejecución y querer conectarse a MySQL
// connectToDB('<ingrese su ip aqui>','<ingrese el puerto aqui>',false);