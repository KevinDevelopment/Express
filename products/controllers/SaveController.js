const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

router.post("/saveProducts", (request, response) => {

    const {responsavel_cadastro, nome_produto, descricao_produto, quantidade_estoque, nome_fornecedor} = request.body;

    Products.create({
        responsavel_cadastro: responsavel_cadastro,
        nome_produto: nome_produto,
        descricao_produto: descricao_produto,
        quantidade_estoque: quantidade_estoque,
        nome_fornecedor: nome_fornecedor
    }).then((User) => {

        response.status(200).json({
            mensagem: "Created User successfylly",
            Dados: User
        })

    }).catch((erro) => {
        console.log(`Ops!, there wa an erro ${erro}`)
    })
});

module.exports = router;