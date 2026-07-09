module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define(
        "Task",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            category: {
                type: DataTypes.ENUM(
                    "React",
                    "Algorithm",
                    "Health",
                    "Reading",
                    "Work",
                    "Personal"
                ),
                allowNull: false,
            },
            priority: {
                type: DataTypes.ENUM("Low", "Medium", "High"),
                defaultValue: "Medium",
            },
            status: {
                type: DataTypes.ENUM(
                    "Todo",
                    "In Progress",
                    "Completed",
                    "Archived"
                ),
                defaultValue: "Todo",
            },
            dueDate: {
                type: DataTypes.DATE,
            },
            completedAt: {
                type: DataTypes.DATE,
            },
        },
        {
            timestamps: true,
        }
    );

    Task.associate = (models) => {
        Task.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
            onDelete: "CASCADE",
        });
    };

    return Task;
};