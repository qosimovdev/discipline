const { Task } = require("../model");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        const task = await Task.create({
            ...req.body,
            userId: req.user.id,
        });

        return res.status(201).json({
            message: "Task created successfully",
            task,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

exports.getAll = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            status,
            priority,
            category,
            search,
        } = req.query;

        const where = {
            userId: req.user.id,
        };

        if (status) where.status = status;
        if (priority) where.priority = priority;
        if (category) where.category = category;

        if (search) {
            where.title = {
                [Op.iLike]: `%${search}%`,
            };
        }

        const { rows, count } = await Task.findAndCountAll({
            where,
            limit: Number(limit),
            offset: (page - 1) * limit,
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({
            tasks: rows,
            total: count,
            page: Number(page),
            totalPages: Math.ceil(count / limit),
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        return res.status(200).json({
            task,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        await task.update(req.body);

        return res.status(200).json({
            message: "Task updated successfully",
            task,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

exports.toggleStatus = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        const completed = task.status !== "completed";

        await task.update({
            status: completed ? "completed" : "todo",
            completedAt: completed ? new Date() : null,
        });

        return res.status(200).json({
            message: "Task updated successfully",
            task,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

exports.remove = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        await task.destroy();

        return res.status(200).json({
            message: "Task deleted successfully",
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};