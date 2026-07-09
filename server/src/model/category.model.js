module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    len: [2, 50],
                },
            },

            color: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "#3B82F6",
            },

            icon: {
                type: DataTypes.STRING,
                defaultValue: "Folder",
            },
        },
        {
            timestamps: true,
        }
    );

    return Category;
};