const router = require("express").Router()
const controller = require("../controller/task.controller")
const auth = require("../middleware/auth.middleware")

router.use(auth);

router.get("/", controller.getAll)
router.post("/", controller.create)
router.get("/:id", controller.getOne);
router.patch("/:id", controller.update)
router.patch("/:id/status", controller.toggleStatus)
router.delete("/:id", controller.remove)

module.exports = router