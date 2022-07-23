const express = require("express");
const app = express();
const helmet = require("helmet");
const connection = require("./database/database");
const User = require("./Users/model/Users");
const Products = require("./products/model/Products");
const UserController = require("./Users/controllers/UserController");
const SaveController = require("./products/controllers/SaveController");
const ListController = require("./products/controllers/ListController");
const EditController = require("./products/controllers/EditController");
const DeleteController = require("./products/controllers/DeleteController");

//settings express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());

//Routes express
app.use("/", UserController);
app.use("/", SaveController);
app.use("/", ListController);
app.use("/", EditController);
app.use("/", DeleteController);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});