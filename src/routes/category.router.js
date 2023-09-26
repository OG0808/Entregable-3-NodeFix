const { getAll, create, getOne, remove, update } = require("../controllers/category.controllers");

const express = require('express')

const routerCategory = express.Router()

routerCategory.route('/')
    .get(getAll)
    .post(create)


routerCategory.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)




module.exports = routerCategory;