const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

router.get("/listProducts", (request, response) => {
    Products.findAll({raw: true}).then((products) => {

        response.status(200).json({
            mensagem: "Dados encontrados",
            Products: products
        })

    }).catch((erro) => {
        console.log(`Ops!, there was an error ${erro}`)
    })
});

module.exports = router;