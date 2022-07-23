const Sequelize = require("sequelize");
const connection = require("../../database/database");

const Users = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Users.sync({force: false}).then(() => {
    console.log("Created table users.")
}).catch((erro) => {
    console.log(`Ops!, there was an error ${erro}`)
});

module.exports = Users;