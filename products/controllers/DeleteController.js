const express = require("express");
const router = express.Router();
const Products = require("../model/Products");
const Verify = require("../../middlewares/verify");

router.delete("/deleteProducts/:id", Verify, (request, response) => {

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