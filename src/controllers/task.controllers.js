const catchError = require('../utils/catchError');
const Task = require('../models/Task');
const Category = require('../models/Category');
const User = require('../models/User');


const getAll = catchError(async (req, res) => {
    const results = await Task.findAll({
        include: [{
            model: User,
            attributes: ['userName']
        }, {
            model: Category,
            attributes: ['name'],

        }]
    });
    return res.json(results);
});

const create = catchError(async (req, res) => {
    const result = await Task.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Task.findByPk(id, {
        include: [
            {
                model: Category,
                attributes: { exclude: ["createdAt", "updatedAt"] },
                attributes: ['name'],

            }
        ]
    });
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Task.destroy({ where: { id } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Task.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setCategories = catchError(async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id)


    await task.setCategories(req.body)
    const categories = await task.getCategories()


    return res.json(categories)

});
const setUsers = catchError(async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByPk(id)


    await task.setUsers(req.body)
    const categories = await task.getUsers()


    return res.json(categories)

});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setCategories,
    setUsers


}