const express = require('express');
const routerUser = require('./user.router');
const routerTask = require('./task.router');
const routerCategory = require('./category.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/tasks', routerTask)
router.use('/categories', routerCategory)


module.exports = router;