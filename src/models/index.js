

const Category = require("./Category");
const Task = require("./Task");
const User = require("./User");



Category.hasMany(Task)
Task.belongsTo(Category)

User.belongsToMany(Task, { through: 'UsersTaks' })
Task.belongsToMany(User, { through: 'UsersTaks' })



// Category.belongsToMany(Task, { through: 'CategoriesTasks' })
// Task.belongsToMany(Category, { through: 'CategoriesTasks' })






