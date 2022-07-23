const Sequelize = require("sequelize");
const connection = new Sequelize('estudo', 'kevin', '12345', {
    host: "localhost",
    dialect: "mariadb",
    logging: false,
    
});

connection.authenticate().then(() => {
    console.log("connection estibilished.")
}).catch((erro) => {
    console.log(`Ops!, there was an error ${erro}`)
});

module.exports = connection;