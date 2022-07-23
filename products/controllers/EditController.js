const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

router.put("/editProducts", (request, response) => {

    const {id,responsavel_cadastro, nome_produto, descricao_produto, quantidade_estoque, nome_fornecedor} = request.body;

    Products.update({
        responsavel_cadastro: responsavel_cadastro,
        nome_produto: nome_produto,
        descricao_produto: descricao_produto,
        quantidade_estoque: quantidade_estoque,
        nome_fornecedor: nome_fornecedor
    }, {
        where: {
            id: id
        }
    }).then((product) => {
        response.status(200).json({
            mensagem: "dados atualizados",
            New_products: product
        })
    }).catch((erro) => {
        console.log(`ops!, there was an error ${erro}`)
    })
});

module.exports = router;