const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Task = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        // defaultValue: false
    },
    //CategoryId
});

module.exports = Task;