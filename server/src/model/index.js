const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require("./user.model")(sequelize, Sequelize.DataTypes)
db.Task = require("./task.model")(sequelize, Sequelize.DataTypes)


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db