const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const bcrypt = require("bcrypt");

router.post("/createUser", async (request, response) => {

    const {email, password} = request.body;
    const hashed = await bcrypt.hash(password, 10);

    const create = await Users.create({
        email: email,
        password: hashed        
    }).then((users) => {

        response.status(200).json({
            mensagem: "User created successfylly",
            User: users
        })

    }).catch((erro) => {
        console.log(`Ops!, there was an error ${erro}`)
    });

    

});

module.exports = router;