const express = require("express");
const router = express.Router();
const Products = require("../model/Products");

router.delete("/deleteProducts/:id", (request, response) => {

    const {id} = request.params;

    Products.destroy({
        where: {
            id: id
        }
    }).then((Product) => {

        response.status(200).json({
            mensagem: "Cadastro deletado",
            Product: Product

        })
    }).catch((erro) => {
        console.log(`ops!, there wa an error ${erro}`)
    })
});

module.exports = router;