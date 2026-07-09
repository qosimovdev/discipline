const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require("./user.model")(sequelize, Sequelize.DataTypes)
db.Category = require("./category.model")(sequelize, Sequelize.DataTypes)

db.User.hasMany(db.Category, {
    foreignKey: "userId",
    as: "categories",
});

db.Category.belongsTo(db.User, {
    foreignKey: "userId",
    as: "user",
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db