const { getAll, create, getOne, remove, update, setCategories, setUsers } = require('../controllers/task.controllers');
const express = require('express');


const routerTask = express.Router();

routerTask.route('/')
    .get(getAll)
    .post(create)

routerTask.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update)


routerTask.route('/:id/categories')
    .post(setCategories)

routerTask.route('/:id/users')
    .post(setUsers)


module.exports = routerTask;