const Sequelize = require("sequelize");
const connection = require("../../database/database");
const User = require("../../Users/model/Users");

const Products = connection.define('products', {

    responsavel_cadastro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao_produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome_fornecedor: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


Products.sync({force: false}).then(() => {
    console.log("created table Products!")
}).catch((erro) => {
    console.log(`Ops!, there was an error ${erro}`)
});

module.exports = Products;